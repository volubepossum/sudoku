import { Injectable } from '@angular/core';
import { SudokuType } from './sudoku';

@Injectable({
  providedIn: 'root'
})
export class SudokuService {

  constructor() { }
  emptyCell(){
    let emptyCell:number[] = [];
    for (let index = 1; index <= 9; index++) {
      emptyCell.push(index);
    }
    return emptyCell;
  }
  emptySudoku():SudokuType[] {
    let emptySudoku:SudokuType[]  = []
    let emptyCell = this.emptyCell();
    for (let X = 0; X < 3; X++) {//ninecluster-coordinates
      for (let Y = 0; Y < 3; Y++) {
        for (let y = 0; y < 3; y++) {//cell-coordinates
          for (let x = 0; x < 3; x++) {//y
            emptySudoku.push({
              'X':X,
              'Y':Y,
              'x':x,
              'y':y,
              'possibleNumbers': emptyCell,
              'hasBeenFilled': false
            })
          }
        }
      }
    }
    return emptySudoku;
  }
}
