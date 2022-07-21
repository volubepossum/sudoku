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
  xddd(){
    return [
      {
          "X": 0,
          "Y": 0,
          "x": 0,
          "y": 0,
          "possibleNumbers": [
              5
          ],
          "hasBeenFilled": true
      },
      {
          "X": 0,
          "Y": 0,
          "x": 1,
          "y": 0,
          "possibleNumbers": [
              1,
              9
          ],
          "hasBeenFilled": false
      },
      {
          "X": 0,
          "Y": 0,
          "x": 2,
          "y": 0,
          "possibleNumbers": [
              8
          ],
          "hasBeenFilled": true
      },
      {
          "X": 0,
          "Y": 0,
          "x": 0,
          "y": 1,
          "possibleNumbers": [
              7,
              9
          ],
          "hasBeenFilled": false
      },
      {
          "X": 0,
          "Y": 0,
          "x": 1,
          "y": 1,
          "possibleNumbers": [
              4
          ],
          "hasBeenFilled": true
      },
      {
          "X": 0,
          "Y": 0,
          "x": 2,
          "y": 1,
          "possibleNumbers": [
              2
          ],
          "hasBeenFilled": true
      },
      {
          "X": 0,
          "Y": 0,
          "x": 0,
          "y": 2,
          "possibleNumbers": [
              6
          ],
          "hasBeenFilled": true
      },
      {
          "X": 0,
          "Y": 0,
          "x": 1,
          "y": 2,
          "possibleNumbers": [
              1
          ],
          "hasBeenFilled": false
      },
      {
          "X": 0,
          "Y": 0,
          "x": 2,
          "y": 2,
          "possibleNumbers": [
              3
          ],
          "hasBeenFilled": true
      },
      {
          "X": 0,
          "Y": 1,
          "x": 0,
          "y": 0,
          "possibleNumbers": [
              8
          ],
          "hasBeenFilled": true
      },
      {
          "X": 0,
          "Y": 1,
          "x": 1,
          "y": 0,
          "possibleNumbers": [
              1,
              2,
              6
          ],
          "hasBeenFilled": false
      },
      {
          "X": 0,
          "Y": 1,
          "x": 2,
          "y": 0,
          "possibleNumbers": [
              9
          ],
          "hasBeenFilled": true
      },
      {
          "X": 0,
          "Y": 1,
          "x": 0,
          "y": 1,
          "possibleNumbers": [
              3
          ],
          "hasBeenFilled": true
      },
      {
          "X": 0,
          "Y": 1,
          "x": 1,
          "y": 1,
          "possibleNumbers": [
              7
          ],
          "hasBeenFilled": true
      },
      {
          "X": 0,
          "Y": 1,
          "x": 2,
          "y": 1,
          "possibleNumbers": [
              5,
              6
          ],
          "hasBeenFilled": false
      },
      {
          "X": 0,
          "Y": 1,
          "x": 0,
          "y": 2,
          "possibleNumbers": [
              4
          ],
          "hasBeenFilled": false
      },
      {
          "X": 0,
          "Y": 1,
          "x": 1,
          "y": 2,
          "possibleNumbers": [
              1,
              6
          ],
          "hasBeenFilled": false
      },
      {
          "X": 0,
          "Y": 1,
          "x": 2,
          "y": 2,
          "possibleNumbers": [
              1,
              4,
              5,
              6
          ],
          "hasBeenFilled": false
      },
      {
          "X": 0,
          "Y": 2,
          "x": 0,
          "y": 0,
          "possibleNumbers": [
              2
          ],
          "hasBeenFilled": true
      },
      {
          "X": 0,
          "Y": 2,
          "x": 1,
          "y": 0,
          "possibleNumbers": [
              3,
              6,
              8
          ],
          "hasBeenFilled": false
      },
      {
          "X": 0,
          "Y": 2,
          "x": 2,
          "y": 0,
          "possibleNumbers": [
              6,
              7
          ],
          "hasBeenFilled": false
      },
      {
          "X": 0,
          "Y": 2,
          "x": 0,
          "y": 1,
          "possibleNumbers": [
              1
          ],
          "hasBeenFilled": true
      },
      {
          "X": 0,
          "Y": 2,
          "x": 1,
          "y": 1,
          "possibleNumbers": [
              3,
              6,
              8,
              9
          ],
          "hasBeenFilled": false
      },
      {
          "X": 0,
          "Y": 2,
          "x": 2,
          "y": 1,
          "possibleNumbers": [
              6,
              7
          ],
          "hasBeenFilled": false
      },
      {
          "X": 0,
          "Y": 2,
          "x": 0,
          "y": 2,
          "possibleNumbers": [
              4,
              9
          ],
          "hasBeenFilled": false
      },
      {
          "X": 0,
          "Y": 2,
          "x": 1,
          "y": 2,
          "possibleNumbers": [
              5
          ],
          "hasBeenFilled": true
      },
      {
          "X": 0,
          "Y": 2,
          "x": 2,
          "y": 2,
          "possibleNumbers": [
              4,
              6
          ],
          "hasBeenFilled": false
      },
      {
          "X": 1,
          "Y": 0,
          "x": 0,
          "y": 0,
          "possibleNumbers": [
              3,
              7
          ],
          "hasBeenFilled": false
      },
      {
          "X": 1,
          "Y": 0,
          "x": 1,
          "y": 0,
          "possibleNumbers": [
              1,
              2,
              7
          ],
          "hasBeenFilled": false
      },
      {
          "X": 1,
          "Y": 0,
          "x": 2,
          "y": 0,
          "possibleNumbers": [
              2,
              3,
              7
          ],
          "hasBeenFilled": false
      },
      {
          "X": 1,
          "Y": 0,
          "x": 0,
          "y": 1,
          "possibleNumbers": [
              5,
              6,
              7
          ],
          "hasBeenFilled": false
      },
      {
          "X": 1,
          "Y": 0,
          "x": 1,
          "y": 1,
          "possibleNumbers": [
              1,
              6,
              7
          ],
          "hasBeenFilled": false
      },
      {
          "X": 1,
          "Y": 0,
          "x": 2,
          "y": 1,
          "possibleNumbers": [
              8
          ],
          "hasBeenFilled": true
      },
      {
          "X": 1,
          "Y": 0,
          "x": 0,
          "y": 2,
          "possibleNumbers": [
              5
          ],
          "hasBeenFilled": false
      },
      {
          "X": 1,
          "Y": 0,
          "x": 1,
          "y": 2,
          "possibleNumbers": [
              4
          ],
          "hasBeenFilled": true
      },
      {
          "X": 1,
          "Y": 0,
          "x": 2,
          "y": 2,
          "possibleNumbers": [
              9
          ],
          "hasBeenFilled": true
      },
      {
          "X": 1,
          "Y": 1,
          "x": 0,
          "y": 0,
          "possibleNumbers": [
              5,
              6,
              7
          ],
          "hasBeenFilled": false
      },
      {
          "X": 1,
          "Y": 1,
          "x": 1,
          "y": 0,
          "possibleNumbers": [
              3
          ],
          "hasBeenFilled": true
      },
      {
          "X": 1,
          "Y": 1,
          "x": 2,
          "y": 0,
          "possibleNumbers": [
              4,
              5,
              6,
              7
          ],
          "hasBeenFilled": false
      },
      {
          "X": 1,
          "Y": 1,
          "x": 0,
          "y": 1,
          "possibleNumbers": [
              2
          ],
          "hasBeenFilled": true
      },
      {
          "X": 1,
          "Y": 1,
          "x": 1,
          "y": 1,
          "possibleNumbers": [
              6,
              9
          ],
          "hasBeenFilled": false
      },
      {
          "X": 1,
          "Y": 1,
          "x": 2,
          "y": 1,
          "possibleNumbers": [
              1
          ],
          "hasBeenFilled": true
      },
      {
          "X": 1,
          "Y": 1,
          "x": 0,
          "y": 2,
          "possibleNumbers": [
              5,
              6,
              7,
              9
          ],
          "hasBeenFilled": false
      },
      {
          "X": 1,
          "Y": 1,
          "x": 1,
          "y": 2,
          "possibleNumbers": [
              8
          ],
          "hasBeenFilled": true
      },
      {
          "X": 1,
          "Y": 1,
          "x": 2,
          "y": 2,
          "possibleNumbers": [
              4,
              5,
              6,
              7
          ],
          "hasBeenFilled": false
      },
      {
          "X": 1,
          "Y": 2,
          "x": 0,
          "y": 0,
          "possibleNumbers": [
              1
          ],
          "hasBeenFilled": true
      },
      {
          "X": 1,
          "Y": 2,
          "x": 1,
          "y": 0,
          "possibleNumbers": [
              5
          ],
          "hasBeenFilled": true
      },
      {
          "X": 1,
          "Y": 2,
          "x": 2,
          "y": 0,
          "possibleNumbers": [
              3,
              6,
              7
          ],
          "hasBeenFilled": false
      },
      {
          "X": 1,
          "Y": 2,
          "x": 0,
          "y": 1,
          "possibleNumbers": [
              4
          ],
          "hasBeenFilled": true
      },
      {
          "X": 1,
          "Y": 2,
          "x": 1,
          "y": 1,
          "possibleNumbers": [
              6,
              7,
              9
          ],
          "hasBeenFilled": false
      },
      {
          "X": 1,
          "Y": 2,
          "x": 2,
          "y": 1,
          "possibleNumbers": [
              3,
              6,
              7
          ],
          "hasBeenFilled": false
      },
      {
          "X": 1,
          "Y": 2,
          "x": 0,
          "y": 2,
          "possibleNumbers": [
              3,
              6,
              8,
              9
          ],
          "hasBeenFilled": false
      },
      {
          "X": 1,
          "Y": 2,
          "x": 1,
          "y": 2,
          "possibleNumbers": [
              2,
              6,
              9
          ],
          "hasBeenFilled": false
      },
      {
          "X": 1,
          "Y": 2,
          "x": 2,
          "y": 2,
          "possibleNumbers": [
              2,
              3,
              6
          ],
          "hasBeenFilled": false
      },
      {
          "X": 2,
          "Y": 0,
          "x": 0,
          "y": 0,
          "possibleNumbers": [
              1,
              9
          ],
          "hasBeenFilled": false
      },
      {
          "X": 2,
          "Y": 0,
          "x": 1,
          "y": 0,
          "possibleNumbers": [
              6
          ],
          "hasBeenFilled": true
      },
      {
          "X": 2,
          "Y": 0,
          "x": 2,
          "y": 0,
          "possibleNumbers": [
              4
          ],
          "hasBeenFilled": false
      },
      {
          "X": 2,
          "Y": 0,
          "x": 0,
          "y": 1,
          "possibleNumbers": [
              1,
              5,
              9
          ],
          "hasBeenFilled": false
      },
      {
          "X": 2,
          "Y": 0,
          "x": 1,
          "y": 1,
          "possibleNumbers": [
              1,
              9
          ],
          "hasBeenFilled": false
      },
      {
          "X": 2,
          "Y": 0,
          "x": 2,
          "y": 1,
          "possibleNumbers": [
              3
          ],
          "hasBeenFilled": true
      },
      {
          "X": 2,
          "Y": 0,
          "x": 0,
          "y": 2,
          "possibleNumbers": [
              1,
              5,
              8
          ],
          "hasBeenFilled": false
      },
      {
          "X": 2,
          "Y": 0,
          "x": 1,
          "y": 2,
          "possibleNumbers": [
              1,
              2,
              8
          ],
          "hasBeenFilled": false
      },
      {
          "X": 2,
          "Y": 0,
          "x": 2,
          "y": 2,
          "possibleNumbers": [
              7
          ],
          "hasBeenFilled": true
      },
      {
          "X": 2,
          "Y": 1,
          "x": 0,
          "y": 0,
          "possibleNumbers": [
              1,
              5,
              6
          ],
          "hasBeenFilled": false
      },
      {
          "X": 2,
          "Y": 1,
          "x": 1,
          "y": 0,
          "possibleNumbers": [
              1,
              7
          ],
          "hasBeenFilled": false
      },
      {
          "X": 2,
          "Y": 1,
          "x": 2,
          "y": 0,
          "possibleNumbers": [
              5,
              6
          ],
          "hasBeenFilled": false
      },
      {
          "X": 2,
          "Y": 1,
          "x": 0,
          "y": 1,
          "possibleNumbers": [
              5,
              6,
              9
          ],
          "hasBeenFilled": false
      },
      {
          "X": 2,
          "Y": 1,
          "x": 1,
          "y": 1,
          "possibleNumbers": [
              4
          ],
          "hasBeenFilled": true
      },
      {
          "X": 2,
          "Y": 1,
          "x": 2,
          "y": 1,
          "possibleNumbers": [
              8
          ],
          "hasBeenFilled": true
      },
      {
          "X": 2,
          "Y": 1,
          "x": 0,
          "y": 2,
          "possibleNumbers": [
              3
          ],
          "hasBeenFilled": true
      },
      {
          "X": 2,
          "Y": 1,
          "x": 1,
          "y": 2,
          "possibleNumbers": [
              1,
              7,
              9
          ],
          "hasBeenFilled": false
      },
      {
          "X": 2,
          "Y": 1,
          "x": 2,
          "y": 2,
          "possibleNumbers": [
              2
          ],
          "hasBeenFilled": true
      },
      {
          "X": 2,
          "Y": 2,
          "x": 0,
          "y": 0,
          "possibleNumbers": [
              4
          ],
          "hasBeenFilled": true
      },
      {
          "X": 2,
          "Y": 2,
          "x": 1,
          "y": 0,
          "possibleNumbers": [
              3,
              8
          ],
          "hasBeenFilled": false
      },
      {
          "X": 2,
          "Y": 2,
          "x": 2,
          "y": 0,
          "possibleNumbers": [
              9
          ],
          "hasBeenFilled": true
      },
      {
          "X": 2,
          "Y": 2,
          "x": 0,
          "y": 1,
          "possibleNumbers": [
              2
          ],
          "hasBeenFilled": true
      },
      {
          "X": 2,
          "Y": 2,
          "x": 1,
          "y": 1,
          "possibleNumbers": [
              5
          ],
          "hasBeenFilled": true
      },
      {
          "X": 2,
          "Y": 2,
          "x": 2,
          "y": 1,
          "possibleNumbers": [
              6
          ],
          "hasBeenFilled": false
      },
      {
          "X": 2,
          "Y": 2,
          "x": 0,
          "y": 2,
          "possibleNumbers": [
              7
          ],
          "hasBeenFilled": true
      },
      {
          "X": 2,
          "Y": 2,
          "x": 1,
          "y": 2,
          "possibleNumbers": [
              3,
              8
          ],
          "hasBeenFilled": false
      },
      {
          "X": 2,
          "Y": 2,
          "x": 2,
          "y": 2,
          "possibleNumbers": [
              1
          ],
          "hasBeenFilled": true
      }
  ]
  }
}
