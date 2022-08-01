import { CurrencyPipe } from '@angular/common';
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
  sudokuState: SudokuType[] = [];
  sudokuCopy: SudokuType[] = [];
  resetSudoku(){
    this.sudokuState = this._sudokuService.emptySudoku();
  }
  getSudoku(){
    this.sudokuState = this._sudokuService.xddd();

  }
  faszom(){
    this.sudokuState = this._sudokuService.fasz();
  }

  miafaszvan(){
    console.log(this.sudokuState, this.sudokuCopy);
  }

  getLiteralCopy(object: object){
    return JSON.parse(JSON.stringify(object));
  }



  // sudoku access
  getCluster(where:number | {X: number, Y: number}, sudoku: SudokuType[] = this.sudokuState){
    let desiredX:number;
    let desiredY:number;
    if(typeof(where) == 'number'){
      desiredX = where%3;
      desiredY = Math.floor(where/3);
    } else {
      desiredX = where.X;
      desiredY = where.Y;
    }
    return sudoku.filter(sudokuCell => sudokuCell.X == desiredX && sudokuCell.Y == desiredY).sort((a,b) => (a.x+a.y*3)-(b.x+b.y*3));
  }

  getAllCLusters(sudoku: SudokuType[] = this.sudokuState){
    let clusters: SudokuType[][] = [];
    for (let clusterId = 0; clusterId < 9; clusterId++) {
      clusters.push(this.getCluster(clusterId, sudoku));
    }
    return clusters;
  }

  getLine(row: number | undefined, column: number|undefined, sudoku: SudokuType[] = this.sudokuState){ // returns the array of cells in the specified row and/or column
    return sudoku.filter(cell => cell.row === row || cell.column === column);
  }

  //change sudoku
  fillCell(where:string | {row:number, column: number}, number: number = this.selectedNumber, sudoku: SudokuType[] = this.sudokuState){
    let cell;
    let cellsModified: SudokuType[];
    if(typeof(where) === 'string'){
      cell = sudoku.find(e => e.X.toString() == where[0] && e.Y.toString() == where[1] && e.x.toString() == where[2] && e.y.toString() == where[3]);
    }else {
      cell = sudoku.find(e => e.row == where.row && e.column == where.column);
    }

    if(cell != undefined && cell.possibleNumbers.includes(number) && !cell.hasBeenFilled){
      this.strikeNumbersAroundCell(cell, number, sudoku);
      cell.hasBeenFilled = true;
    }else {
      alert('you can not make this move :(');
    }
  }

  clearCells(cells:SudokuType[], number:number){
    cells.forEach(e => {e.possibleNumbers = e.possibleNumbers.filter(possibility => possibility != number)});
  }

  strikeNumberInLine(row:number | undefined, column:number | undefined, number: number, sudoku: SudokuType[] = this.sudokuState){ //strikes a numberfrom the row and the colummn (if defined)
    this.clearCells(this.getLine(row, column, sudoku),number);
  }

  strikeNumberInCluster(X:number, Y: number, number: number, sudoku: SudokuType[] = this.sudokuState){
    this.clearCells(sudoku.filter(cell => cell.X == X && cell.Y == Y),number);
  }

  fillOnlyOnePossibility(){
    for (const cell of this.sudokuState) if (!cell.hasBeenFilled && cell.possibleNumbers.length == 1) this.fillCell(''+cell.X+cell.Y+cell.x+cell.y, cell.possibleNumbers[0]);
  }

  strikeNumbersAroundCell(cell: SudokuType, number: number, sudoku: SudokuType[] = this.sudokuState){ //softfill
    this.strikeNumberInCluster(cell.X, cell.Y, number, sudoku);//beauty
    this.strikeNumberInLine(cell.row, cell.column, number, sudoku);
    let cellInJSON = JSON.stringify(cell);
    this.sudokuState.filter(e => JSON.stringify(e) == cellInJSON)[0].possibleNumbers = [number];
  }

  selectedNumber:number = 1;
  setSelectedNumber(i: number = 1){this.selectedNumber = i;}


  //sudokusolver
  sleepFor(sleepDuration: number){
    let now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){
        /* Do nothing */
    }
  }

  solveSudoku(sudoku: SudokuType[]): boolean{
    let cell = sudoku.reduce((pre,cur) => !cur.hasBeenFilled && (pre.hasBeenFilled || cur.possibleNumbers.length <= pre.possibleNumbers.length) ? cur : pre);
    if (cell.hasBeenFilled) {alert("success"); return true;}

    let numbers = this.getLiteralCopy(cell.possibleNumbers);

    for (const number of numbers) {
      let changes = sudoku.filter(function(e) {
        if (!e.hasBeenFilled && e.possibleNumbers.includes(number)
          && (e.row === cell.row || e.column === cell.column || (e.X === cell.X && e.Y === cell.Y))
        ) { e.possibleNumbers = e.possibleNumbers.filter(num => num != number); return true;} return false;
      });
      cell.hasBeenFilled = true;
      cell.possibleNumbers = [number];
      if (this.solveSudoku(sudoku)){
        return true;
      }
      changes.forEach(e => e.possibleNumbers.push(number));
      cell.possibleNumbers = numbers;
      cell.hasBeenFilled = false;
    }
    return false;
  }
}
