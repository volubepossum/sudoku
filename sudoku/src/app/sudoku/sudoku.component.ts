import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs';
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

  nineCells(i:number){
    let desiredX:number = i%3;
    let desiredY:number = Math.floor(i/3);
    return this.sudokuState.filter(sudokuCell => sudokuCell.X == desiredX && sudokuCell.Y == desiredY)
  }

  fillCell(where:string):void{
    let cell = this.sudokuState.find(e => e.X.toString() == where[0] && e.Y.toString() == where[1] && e.x.toString() == where[2] && e.y.toString() == where[3])
    if(cell != undefined && cell.possibleNumbers.includes(this.selectedNumber) && !cell.hasBeenFilled){
      this.strikeNumbersAroundCell(cell);
      cell.possibleNumbers=[this.selectedNumber];
      cell.hasBeenFilled = true;
    }else {
      alert('you can not make this move :(');
    }
  }

  strikeNumbersAroundCell(cell: SudokuType){
    this.sudokuState.forEach(e => {
      if((e.X == cell?.X && e.Y == cell.Y) || (e.X == cell?.X && e.x == cell.x) || (e.Y == cell?.Y && e.y == cell.y) && e.possibleNumbers.includes(this.selectedNumber))
      {
        e.possibleNumbers = e.possibleNumbers.filter(numb => numb != this.selectedNumber);
      }
    });
  }

  

  selectedNumber:number = 1;
  setSelectedNumber(i: number = 1){this.selectedNumber = i;}
}
