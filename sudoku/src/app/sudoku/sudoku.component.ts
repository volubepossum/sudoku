import { Component, OnInit } from '@angular/core';
import { SudokuType } from '../sudoku';
import { SudokuService } from '../sudoku.service';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.scss']
})
export class SudokuComponent implements OnInit {

  constructor(private _sudokuService: SudokuService) {

  }

  ngOnInit(): void {
    this.resetSudoku();
  }




  //sudoku datasets
  sudokuState:SudokuType[] = [];
  resetSudoku(){
    this.sudokuState = this._sudokuService.emptySudoku();
  }
  getSudoku(){
    this.sudokuState = this._sudokuService.xddd();
  }
  faszom(){
    //this.sudokuState = this._sudokuService.fasz();
  }

  miafaszvan(){
    console.log(this.sudokuState);

  }



  // sudoku access
  getCluster(where:number | {X: number, Y: number}){
    let desiredX:number;
    let desiredY:number;
    if(typeof(where) == 'number'){
      desiredX = where%3;
      desiredY = Math.floor(where/3);
    } else {
      desiredX = where.X;
      desiredY = where.Y;
    }
    return this.sudokuState.filter(sudokuCell => sudokuCell.X == desiredX && sudokuCell.Y == desiredY).sort((a,b) => (a.x+a.y*3)-(b.x+b.y*3));
  }

  getAllCLusters(){
    let clusters: SudokuType[][] = [];
    for (let clusterId = 0; clusterId < 9; clusterId++) {
      clusters.push(this.getCluster(clusterId));
    }
    return clusters;
  }

  getLine(row: number | undefined, column: number|undefined){ // returns the array of cells in the specified row and/or column
    return this.sudokuState.filter(cell => cell.row === row || cell.column === column);
  }

  //change sudoku
  fillCell(where:string, number: number = this.selectedNumber):void{
    let cell = this.sudokuState.find(e => e.X.toString() == where[0] && e.Y.toString() == where[1] && e.x.toString() == where[2] && e.y.toString() == where[3]);
    if(cell != undefined && cell.possibleNumbers.includes(number) && !cell.hasBeenFilled){
      this.strikeNumbersAroundCell(cell, number);
      cell.hasBeenFilled = true;
    }else {
      alert('you can not make this move :(');
    }
  }

  clearCells(cells:SudokuType[], number:number){
    cells.forEach(e => {e.possibleNumbers = e.possibleNumbers.filter(possibility => possibility != number)});
  }

  strikeNumberInLine(row:number | undefined, column:number | undefined, number: number){ //strikes a numberfrom the row and the colummn (if defined)
    this.clearCells(this.getLine(row, column),number);
  }

  strikeNumberInCluster(X:number, Y: number, number: number){
    this.clearCells(this.sudokuState.filter(cell => cell.X == X && cell.Y == Y),number);
  }

  fillOnlyOnePossibility():boolean{
    let wasAThingToChange: boolean = false;
    for (const cell of this.sudokuState) {
      if (!cell.hasBeenFilled && cell.possibleNumbers.length == 1){
        this.fillCell(''+cell.X+cell.Y+cell.x+cell.y, cell.possibleNumbers[0]);
        wasAThingToChange = true;
      }
    }
    return wasAThingToChange;
  }

  strikeNumbersAroundCell(cell: SudokuType, number: number){ //softfill
    this.strikeNumberInCluster(cell.X, cell.Y, number);//beauty
    this.strikeNumberInLine(cell.row, cell.column, number);
    let cellInJSON = JSON.stringify(cell);
    this.sudokuState.filter(e => JSON.stringify(e) == cellInJSON)[0].possibleNumbers = [number];


    /*this.sudokuState.forEach(e => {//faster
      if((e.X == cell?.X && e.Y == cell.Y) || (e.X == cell?.X && e.x == cell.x) || (e.Y == cell?.Y && e.y == cell.y) && e.possibleNumbers.includes(this.selectedNumber))
      {
        e.possibleNumbers = e.possibleNumbers.filter(numb => numb != this.selectedNumber);
      }
    });*/
  }

  selectedNumber:number = 1;
  setSelectedNumber(i: number = 1){this.selectedNumber = i;}


//sudoku solver

  numberInFewLines (cluster: SudokuType[], number: number){
    let fewcell = cluster.filter(e => e.possibleNumbers.includes(number));
    let returnable: {
      isInOneLine: 'rowcol' | 'row' | 'col' | undefined;//true: only one times in the cluster, false: not in one line, x: in one row, y: in one column
      occupiedColumns: number[];
      occupiedRows: number[];
    } = {
      'isInOneLine': 'rowcol',
      'occupiedColumns': [fewcell[0].x],
      'occupiedRows': [fewcell[0].y]
    }
    if (fewcell.length === 1) {
      return returnable;
    } else {
      returnable.isInOneLine = undefined;
    }



    for (const cell of fewcell) {
      if (!returnable.occupiedColumns.includes(cell.x)){
        returnable.occupiedColumns.push(cell.x);
      }
      if (!returnable.occupiedRows.includes(cell.y)){
        returnable.occupiedRows.push(cell.y);
      }
    }

    if (returnable.occupiedColumns.length === 1){
      returnable.isInOneLine = 'col';
    } else if (returnable.occupiedRows.length === 1){
      returnable.isInOneLine = 'row';
    }
    return returnable;
  }

  scanForInOneLine(){ // if in a cluster the only way a number can be is in one line (so in that line other clusters can't have the number)
    for (let clusterId = 0; clusterId < 9; clusterId++) {
      const cluster = JSON.parse(JSON.stringify(this.getCluster(clusterId)));
      for (let number = 1; number <= 9; number++) {
        const lineAnalisys = this.numberInFewLines(cluster,number);
        const column = (clusterId % 3)*3 + lineAnalisys.occupiedColumns[0];
        const row = Math.floor(clusterId / 3)*3 + lineAnalisys.occupiedRows[0];
        if (lineAnalisys.isInOneLine === 'row'){
          this.strikeNumberInLine(row, undefined, number);
        }
        else if (lineAnalisys.isInOneLine === 'col'){
          this.strikeNumberInLine(undefined, column, number);
        }
      }
      this.getCluster(clusterId).forEach((e,i) => {e.possibleNumbers = cluster[i].possibleNumbers});
    }
  }

  scanOnePlacePossible(){//if there is only one place possible for a number in a line or cluster
    let nineCells: SudokuType[][] = [];
    nineCells = nineCells.concat(this.getAllCLusters());
    for (let line = 0; line < 9; line++) {//alll lines
      nineCells.push(this.getLine(line,undefined),this.getLine(undefined,line));
    }
    for (const nineCell of nineCells) {
      for (let number = 1; number <= 9; number++){
        let placesPossible = nineCell.filter(cell => cell.possibleNumbers.includes(number));
        if (placesPossible.length === 1 && !placesPossible[0].hasBeenFilled){
          this.strikeNumbersAroundCell(placesPossible[0],number);
        }
      }
    }
  }


  nameitlater(){
    let clusters: SudokuType[][] = [];
    for (let clusterId = 0; clusterId < 9; clusterId++) {
      clusters.push(this.getCluster(clusterId));
    }
    let clustersOnSide = clusters.filter(cells => cells.every(cell => cell.X == 1 || cell.Y == 1));
    for (const cluster of clustersOnSide) {
      //páronként baszás az elfoglalt lanekkel
    }
  }

  scanSudoku(){
    this.scanForInOneLine();
    this.scanOnePlacePossible();

  }
}
