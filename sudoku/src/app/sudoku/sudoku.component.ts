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
  sudokuState:SudokuType[] = [];
  resetSudoku(){
    this.sudokuState = this._sudokuService.emptySudoku();
  }
  getSudoku(){
    this.sudokuState = this._sudokuService.xddd();
  }

  getCluster(i:number){
    let desiredX:number = i%3;
    let desiredY:number = Math.floor(i/3);
    return this.sudokuState.filter(sudokuCell => sudokuCell.X == desiredX && sudokuCell.Y == desiredY)
  }
  getLine(direction: 'horizontal' | 'vertical', occupiedLineBig: number, occupiedLineSmall: number){
    if(direction == 'horizontal'){
      return this.sudokuState.filter(e => e.Y == occupiedLineBig && e.y == occupiedLineSmall);
    } else {
      return this.sudokuState.filter(e => e.X == occupiedLineBig && e.x == occupiedLineSmall);
    }
  }

  fillCell(where:string):void{
    let cell = this.sudokuState.find(e => e.X.toString() == where[0] && e.Y.toString() == where[1] && e.x.toString() == where[2] && e.y.toString() == where[3]);
    if(cell != undefined && cell.possibleNumbers.includes(this.selectedNumber) && !cell.hasBeenFilled){
      this.strikeNumbersAroundCell(cell, this.selectedNumber);
      cell.possibleNumbers=[this.selectedNumber];
      cell.hasBeenFilled = true;
    }else {
      alert('you can not make this move :(');
    }
  }

  clearCells(cells:SudokuType[], number:number){
    cells.forEach(e => {e.possibleNumbers = e.possibleNumbers.filter(possibility => possibility != number)});
  }

  strikeNumbersAroundCell(cell: SudokuType, number: number){
    this.strikeNumberInCluster(cell.X, cell.Y, number);//beauty
    this.strikeNunberInLine('horizontal',cell.Y,cell.y, number);
    this.strikeNunberInLine('vertical',cell.X,cell.x, number);
    let cellInJSON = JSON.stringify(cell);
    this.sudokuState.filter(e => JSON.stringify(e) == cellInJSON)[0].possibleNumbers = cell.possibleNumbers;


    /*this.sudokuState.forEach(e => {//faster
      if((e.X == cell?.X && e.Y == cell.Y) || (e.X == cell?.X && e.x == cell.x) || (e.Y == cell?.Y && e.y == cell.y) && e.possibleNumbers.includes(this.selectedNumber))
      {
        e.possibleNumbers = e.possibleNumbers.filter(numb => numb != this.selectedNumber);
      }
    });*/
  }

  strikeNunberInLine(lineDirection: 'horizontal' | 'vertical', occupiedLineBig: number, occupiedLineSmall: number, number: number){
    this.clearCells(this.getLine(lineDirection,occupiedLineBig,occupiedLineSmall),number);
  }

  strikeNumberInCluster(X:number, Y: number, number: number){
    this.clearCells(this.sudokuState.filter(cell => cell.X == X && cell.Y == Y),number);
  }

  fillOnlyOnePossibility():boolean{
    let wasAThingToChange: boolean = false;
    for (const cell of this.sudokuState) {
      if (!cell.hasBeenFilled && cell.possibleNumbers.length == 1){
        cell.hasBeenFilled = true;
        wasAThingToChange = true;
      }
    }
    return wasAThingToChange;
  }

  selectedNumber:number = 1;
  setSelectedNumber(i: number = 1){this.selectedNumber = i;}


//sudoku solver functions

  numberInFewLines (ninecell: SudokuType[], number: number){
    let fewcell = ninecell.filter(e => e.possibleNumbers.includes(number));
    let returnable: {
      isInOneLine: boolean;
      lineDirections: string[];
      occupiedColumns: number[];
      occupiedRows: number[];
    } = {
      'isInOneLine': true,
      'lineDirections': [],
      'occupiedColumns': [fewcell[0].x],
      'occupiedRows': [fewcell[0].y]
    }

    if (fewcell.length == 1) {
      returnable.lineDirections.push('horizontal','vertical');
      return returnable;
    }

    for (const cell of fewcell) {
      if (!returnable.occupiedColumns.includes(cell.x)) returnable.occupiedColumns.push(cell.x);
      if (!returnable.occupiedRows.includes(cell.y)) returnable.occupiedRows.push(cell.y);
    }

    if (returnable.occupiedColumns.length == 1) returnable.lineDirections.push('vertical');
    else if (returnable.occupiedRows.length == 1) returnable.lineDirections.push('horizontal');
    else returnable.isInOneLine = false;
    return returnable;
  }

  scanForInOneLine(){ // if in a cluster the only way a number can be is in one line (so in that line other clusters can't have the number)
    for (let clusterId = 0; clusterId < 9; clusterId++) {
      const cluster = JSON.parse(JSON.stringify(this.getCluster(clusterId)));
      for (let number = 1; number <= 9; number++) {
        let lineAnalisys = this.numberInFewLines(cluster,number);
        if(lineAnalisys.isInOneLine) {
          if(lineAnalisys.lineDirections.includes('horizontal')){
            this.strikeNunberInLine('horizontal',cluster[0].Y,lineAnalisys.occupiedRows[0],number);
          }
          if(lineAnalisys.lineDirections.includes('vertical')){
            this.strikeNunberInLine('vertical',cluster[0].X,lineAnalisys.occupiedColumns[0],number);
          }
        }
      }
      this.getCluster(clusterId).forEach((e,i) => {e.possibleNumbers = cluster[i].possibleNumbers});
    }
  }

  scanOnePlacePossible(){//if there is only one place possible for a number in a line or cluster
    let clusters: SudokuType[][] = [];
    for (let clusterId = 0; clusterId < 9; clusterId++) {
      clusters.push(this.getCluster(clusterId));
    }
    for (let big = 0; big < 3; big++) {//ninecluster-coordinates
      for (let small = 0; small < 3; small++) {
        clusters.push(this.getLine('horizontal',big,small),this.getLine('vertical',big,small));
      }
    }
    for (const cluster of clusters) {
      for (let number = 1; number <= 9; number++){
        let placesPossible = cluster.filter(cell => cell.possibleNumbers.includes(number));

        if (placesPossible.length == 1 && !placesPossible[0].hasBeenFilled){
          this.strikeNumbersAroundCell(placesPossible[0],number);
        }
      }
    }
  }

  scanSudoku(){
    this.scanOnePlacePossible();
    this.scanForInOneLine();
  }



}
