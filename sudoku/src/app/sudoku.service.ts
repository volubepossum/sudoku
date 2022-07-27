import { Injectable } from '@angular/core';
import { SudokuType } from './sudoku';

@Injectable({
  providedIn: 'root'
})
export class SudokuService {

  constructor() { }


  emptySudoku():SudokuType[] {
    let emptySudoku:SudokuType[]  = []
    for (let row = 0; row < 9; row++){
      for (let column = 0; column < 9; column++){
        emptySudoku.push(new SudokuType(row, column));
      }
    }
    return emptySudoku;
  }
  xddd(){
    return [
      {
          "possibleNumbers": [
              2,
              3,
              4,
              7,
              9
          ],
          "hasBeenFilled": false,
          "row": 0,
          "column": 0,
          "X": 0,
          "Y": 0,
          "x": 0,
          "y": 0
      },
      {
          "possibleNumbers": [
              2,
              3,
              7,
              9
          ],
          "hasBeenFilled": false,
          "row": 0,
          "column": 1,
          "X": 0,
          "Y": 0,
          "x": 1,
          "y": 0
      },
      {
          "possibleNumbers": [
              6
          ],
          "hasBeenFilled": true,
          "row": 0,
          "column": 2,
          "X": 0,
          "Y": 0,
          "x": 2,
          "y": 0
      },
      {
          "possibleNumbers": [
              3,
              7,
              9
          ],
          "hasBeenFilled": false,
          "row": 0,
          "column": 3,
          "X": 1,
          "Y": 0,
          "x": 0,
          "y": 0
      },
      {
          "possibleNumbers": [
              3,
              4,
              9
          ],
          "hasBeenFilled": false,
          "row": 0,
          "column": 4,
          "X": 1,
          "Y": 0,
          "x": 1,
          "y": 0
      },
      {
          "possibleNumbers": [
              8
          ],
          "hasBeenFilled": true,
          "row": 0,
          "column": 5,
          "X": 1,
          "Y": 0,
          "x": 2,
          "y": 0
      },
      {
          "possibleNumbers": [
              4,
              7
          ],
          "hasBeenFilled": false,
          "row": 0,
          "column": 6,
          "X": 2,
          "Y": 0,
          "x": 0,
          "y": 0
      },
      {
          "possibleNumbers": [
              5
          ],
          "hasBeenFilled": true,
          "row": 0,
          "column": 7,
          "X": 2,
          "Y": 0,
          "x": 1,
          "y": 0
      },
      {
          "possibleNumbers": [
              1
          ],
          "hasBeenFilled": true,
          "row": 0,
          "column": 8,
          "X": 2,
          "Y": 0,
          "x": 2,
          "y": 0
      },
      {
          "possibleNumbers": [
              1,
              2,
              4,
              5,
              7,
              9
          ],
          "hasBeenFilled": false,
          "row": 1,
          "column": 0,
          "X": 0,
          "Y": 0,
          "x": 0,
          "y": 1
      },
      {
          "possibleNumbers": [
              2,
              5,
              7,
              9
          ],
          "hasBeenFilled": false,
          "row": 1,
          "column": 1,
          "X": 0,
          "Y": 0,
          "x": 1,
          "y": 1
      },
      {
          "possibleNumbers": [
              2,
              4,
              5,
              7
          ],
          "hasBeenFilled": false,
          "row": 1,
          "column": 2,
          "X": 0,
          "Y": 0,
          "x": 2,
          "y": 1
      },
      {
          "possibleNumbers": [
              1,
              5,
              6,
              7,
              9
          ],
          "hasBeenFilled": false,
          "row": 1,
          "column": 3,
          "X": 1,
          "Y": 0,
          "x": 0,
          "y": 1
      },
      {
          "possibleNumbers": [
              1,
              4,
              5,
              6,
              9
          ],
          "hasBeenFilled": false,
          "row": 1,
          "column": 4,
          "X": 1,
          "Y": 0,
          "x": 1,
          "y": 1
      },
      {
          "possibleNumbers": [
              1,
              4,
              6,
              7,
              9
          ],
          "hasBeenFilled": false,
          "row": 1,
          "column": 5,
          "X": 1,
          "Y": 0,
          "x": 2,
          "y": 1
      },
      {
          "possibleNumbers": [
              4,
              6,
              7,
              8
          ],
          "hasBeenFilled": false,
          "row": 1,
          "column": 6,
          "X": 2,
          "Y": 0,
          "x": 0,
          "y": 1
      },
      {
          "possibleNumbers": [
              2,
              4,
              7,
              8
          ],
          "hasBeenFilled": false,
          "row": 1,
          "column": 7,
          "X": 2,
          "Y": 0,
          "x": 1,
          "y": 1
      },
      {
          "possibleNumbers": [
              3
          ],
          "hasBeenFilled": true,
          "row": 1,
          "column": 8,
          "X": 2,
          "Y": 0,
          "x": 2,
          "y": 1
      },
      {
          "possibleNumbers": [
              8
          ],
          "hasBeenFilled": true,
          "row": 2,
          "column": 0,
          "X": 0,
          "Y": 0,
          "x": 0,
          "y": 2
      },
      {
          "possibleNumbers": [
              3,
              5,
              7,
              9
          ],
          "hasBeenFilled": false,
          "row": 2,
          "column": 1,
          "X": 0,
          "Y": 0,
          "x": 1,
          "y": 2
      },
      {
          "possibleNumbers": [
              3,
              4,
              5,
              7
          ],
          "hasBeenFilled": false,
          "row": 2,
          "column": 2,
          "X": 0,
          "Y": 0,
          "x": 2,
          "y": 2
      },
      {
          "possibleNumbers": [
              2
          ],
          "hasBeenFilled": true,
          "row": 2,
          "column": 3,
          "X": 1,
          "Y": 0,
          "x": 0,
          "y": 2
      },
      {
          "possibleNumbers": [
              1,
              3,
              4,
              5,
              6,
              9
          ],
          "hasBeenFilled": false,
          "row": 2,
          "column": 4,
          "X": 1,
          "Y": 0,
          "x": 1,
          "y": 2
      },
      {
          "possibleNumbers": [
              1,
              3,
              4,
              6,
              7,
              9
          ],
          "hasBeenFilled": false,
          "row": 2,
          "column": 5,
          "X": 1,
          "Y": 0,
          "x": 2,
          "y": 2
      },
      {
          "possibleNumbers": [
              4,
              6,
              7
          ],
          "hasBeenFilled": false,
          "row": 2,
          "column": 6,
          "X": 2,
          "Y": 0,
          "x": 0,
          "y": 2
      },
      {
          "possibleNumbers": [
              4,
              7
          ],
          "hasBeenFilled": false,
          "row": 2,
          "column": 7,
          "X": 2,
          "Y": 0,
          "x": 1,
          "y": 2
      },
      {
          "possibleNumbers": [
              4,
              6,
              7,
              9
          ],
          "hasBeenFilled": false,
          "row": 2,
          "column": 8,
          "X": 2,
          "Y": 0,
          "x": 2,
          "y": 2
      },
      {
          "possibleNumbers": [
              2,
              4,
              6,
              7
          ],
          "hasBeenFilled": false,
          "row": 3,
          "column": 0,
          "X": 0,
          "Y": 1,
          "x": 0,
          "y": 0
      },
      {
          "possibleNumbers": [
              2,
              6,
              7,
              8
          ],
          "hasBeenFilled": false,
          "row": 3,
          "column": 1,
          "X": 0,
          "Y": 1,
          "x": 1,
          "y": 0
      },
      {
          "possibleNumbers": [
              2,
              4,
              7,
              8
          ],
          "hasBeenFilled": false,
          "row": 3,
          "column": 2,
          "X": 0,
          "Y": 1,
          "x": 2,
          "y": 0
      },
      {
          "possibleNumbers": [
              1,
              6,
              7,
              8,
              9
          ],
          "hasBeenFilled": false,
          "row": 3,
          "column": 3,
          "X": 1,
          "Y": 1,
          "x": 0,
          "y": 0
      },
      {
          "possibleNumbers": [
              1,
              2,
              6,
              8,
              9
          ],
          "hasBeenFilled": false,
          "row": 3,
          "column": 4,
          "X": 1,
          "Y": 1,
          "x": 1,
          "y": 0
      },
      {
          "possibleNumbers": [
              5
          ],
          "hasBeenFilled": true,
          "row": 3,
          "column": 5,
          "X": 1,
          "Y": 1,
          "x": 2,
          "y": 0
      },
      {
          "possibleNumbers": [
              3
          ],
          "hasBeenFilled": true,
          "row": 3,
          "column": 6,
          "X": 2,
          "Y": 1,
          "x": 0,
          "y": 0
      },
      {
          "possibleNumbers": [
              1,
              4,
              7,
              8
          ],
          "hasBeenFilled": false,
          "row": 3,
          "column": 7,
          "X": 2,
          "Y": 1,
          "x": 1,
          "y": 0
      },
      {
          "possibleNumbers": [
              4,
              6,
              7
          ],
          "hasBeenFilled": false,
          "row": 3,
          "column": 8,
          "X": 2,
          "Y": 1,
          "x": 2,
          "y": 0
      },
      {
          "possibleNumbers": [
              3,
              4,
              5,
              6,
              7
          ],
          "hasBeenFilled": false,
          "row": 4,
          "column": 0,
          "X": 0,
          "Y": 1,
          "x": 0,
          "y": 1
      },
      {
          "possibleNumbers": [
              3,
              5,
              6,
              7,
              8
          ],
          "hasBeenFilled": false,
          "row": 4,
          "column": 1,
          "X": 0,
          "Y": 1,
          "x": 1,
          "y": 1
      },
      {
          "possibleNumbers": [
              9
          ],
          "hasBeenFilled": true,
          "row": 4,
          "column": 2,
          "X": 0,
          "Y": 1,
          "x": 2,
          "y": 1
      },
      {
          "possibleNumbers": [
              1,
              3,
              6,
              7,
              8
          ],
          "hasBeenFilled": false,
          "row": 4,
          "column": 3,
          "X": 1,
          "Y": 1,
          "x": 0,
          "y": 1
      },
      {
          "possibleNumbers": [
              1,
              3,
              6,
              8
          ],
          "hasBeenFilled": false,
          "row": 4,
          "column": 4,
          "X": 1,
          "Y": 1,
          "x": 1,
          "y": 1
      },
      {
          "possibleNumbers": [
              1,
              3,
              6,
              7
          ],
          "hasBeenFilled": false,
          "row": 4,
          "column": 5,
          "X": 1,
          "Y": 1,
          "x": 2,
          "y": 1
      },
      {
          "possibleNumbers": [
              2
          ],
          "hasBeenFilled": true,
          "row": 4,
          "column": 6,
          "X": 2,
          "Y": 1,
          "x": 0,
          "y": 1
      },
      {
          "possibleNumbers": [
              1,
              4,
              7,
              8
          ],
          "hasBeenFilled": false,
          "row": 4,
          "column": 7,
          "X": 2,
          "Y": 1,
          "x": 1,
          "y": 1
      },
      {
          "possibleNumbers": [
              4,
              6,
              7
          ],
          "hasBeenFilled": false,
          "row": 4,
          "column": 8,
          "X": 2,
          "Y": 1,
          "x": 2,
          "y": 1
      },
      {
          "possibleNumbers": [
              2,
              3,
              6,
              7
          ],
          "hasBeenFilled": false,
          "row": 5,
          "column": 0,
          "X": 0,
          "Y": 1,
          "x": 0,
          "y": 2
      },
      {
          "possibleNumbers": [
              1
          ],
          "hasBeenFilled": true,
          "row": 5,
          "column": 1,
          "X": 0,
          "Y": 1,
          "x": 1,
          "y": 2
      },
      {
          "possibleNumbers": [
              2,
              3,
              7,
              8
          ],
          "hasBeenFilled": false,
          "row": 5,
          "column": 2,
          "X": 0,
          "Y": 1,
          "x": 2,
          "y": 2
      },
      {
          "possibleNumbers": [
              4
          ],
          "hasBeenFilled": true,
          "row": 5,
          "column": 3,
          "X": 1,
          "Y": 1,
          "x": 0,
          "y": 2
      },
      {
          "possibleNumbers": [
              2,
              3,
              6,
              8
          ],
          "hasBeenFilled": false,
          "row": 5,
          "column": 4,
          "X": 1,
          "Y": 1,
          "x": 1,
          "y": 2
      },
      {
          "possibleNumbers": [
              3,
              6,
              7
          ],
          "hasBeenFilled": false,
          "row": 5,
          "column": 5,
          "X": 1,
          "Y": 1,
          "x": 2,
          "y": 2
      },
      {
          "possibleNumbers": [
              6,
              7,
              8
          ],
          "hasBeenFilled": false,
          "row": 5,
          "column": 6,
          "X": 2,
          "Y": 1,
          "x": 0,
          "y": 2
      },
      {
          "possibleNumbers": [
              9
          ],
          "hasBeenFilled": true,
          "row": 5,
          "column": 7,
          "X": 2,
          "Y": 1,
          "x": 1,
          "y": 2
      },
      {
          "possibleNumbers": [
              5
          ],
          "hasBeenFilled": true,
          "row": 5,
          "column": 8,
          "X": 2,
          "Y": 1,
          "x": 2,
          "y": 2
      },
      {
          "possibleNumbers": [
              2,
              3,
              5,
              6,
              9
          ],
          "hasBeenFilled": false,
          "row": 6,
          "column": 0,
          "X": 0,
          "Y": 2,
          "x": 0,
          "y": 0
      },
      {
          "possibleNumbers": [
              4
          ],
          "hasBeenFilled": true,
          "row": 6,
          "column": 1,
          "X": 0,
          "Y": 2,
          "x": 1,
          "y": 0
      },
      {
          "possibleNumbers": [
              2,
              3,
              5,
              8
          ],
          "hasBeenFilled": false,
          "row": 6,
          "column": 2,
          "X": 0,
          "Y": 2,
          "x": 2,
          "y": 0
      },
      {
          "possibleNumbers": [
              1,
              3,
              5,
              6,
              8,
              9
          ],
          "hasBeenFilled": false,
          "row": 6,
          "column": 3,
          "X": 1,
          "Y": 2,
          "x": 0,
          "y": 0
      },
      {
          "possibleNumbers": [
              7
          ],
          "hasBeenFilled": true,
          "row": 6,
          "column": 4,
          "X": 1,
          "Y": 2,
          "x": 1,
          "y": 0
      },
      {
          "possibleNumbers": [
              1,
              3,
              6,
              9
          ],
          "hasBeenFilled": false,
          "row": 6,
          "column": 5,
          "X": 1,
          "Y": 2,
          "x": 2,
          "y": 0
      },
      {
          "possibleNumbers": [
              1,
              5
          ],
          "hasBeenFilled": false,
          "row": 6,
          "column": 6,
          "X": 2,
          "Y": 2,
          "x": 0,
          "y": 0
      },
      {
          "possibleNumbers": [
              1,
              2,
              3
          ],
          "hasBeenFilled": false,
          "row": 6,
          "column": 7,
          "X": 2,
          "Y": 2,
          "x": 1,
          "y": 0
      },
      {
          "possibleNumbers": [
              2
          ],
          "hasBeenFilled": false,
          "row": 6,
          "column": 8,
          "X": 2,
          "Y": 2,
          "x": 2,
          "y": 0
      },
      {
          "possibleNumbers": [
              2,
              3,
              5,
              6,
              7
          ],
          "hasBeenFilled": false,
          "row": 7,
          "column": 0,
          "X": 0,
          "Y": 2,
          "x": 0,
          "y": 1
      },
      {
          "possibleNumbers": [
              2,
              3,
              5,
              6,
              7,
              8
          ],
          "hasBeenFilled": false,
          "row": 7,
          "column": 1,
          "X": 0,
          "Y": 2,
          "x": 1,
          "y": 1
      },
      {
          "possibleNumbers": [
              2,
              3,
              5,
              7,
              8
          ],
          "hasBeenFilled": false,
          "row": 7,
          "column": 2,
          "X": 0,
          "Y": 2,
          "x": 2,
          "y": 1
      },
      {
          "possibleNumbers": [
              1,
              3,
              5,
              6,
              8
          ],
          "hasBeenFilled": false,
          "row": 7,
          "column": 3,
          "X": 1,
          "Y": 2,
          "x": 0,
          "y": 1
      },
      {
          "possibleNumbers": [
              1,
              3,
              4,
              5,
              6,
              8
          ],
          "hasBeenFilled": false,
          "row": 7,
          "column": 4,
          "X": 1,
          "Y": 2,
          "x": 1,
          "y": 1
      },
      {
          "possibleNumbers": [
              1,
              3,
              4,
              6
          ],
          "hasBeenFilled": false,
          "row": 7,
          "column": 5,
          "X": 1,
          "Y": 2,
          "x": 2,
          "y": 1
      },
      {
          "possibleNumbers": [
              9
          ],
          "hasBeenFilled": true,
          "row": 7,
          "column": 6,
          "X": 2,
          "Y": 2,
          "x": 0,
          "y": 1
      },
      {
          "possibleNumbers": [
              1,
              2,
              3,
              4,
              7
          ],
          "hasBeenFilled": false,
          "row": 7,
          "column": 7,
          "X": 2,
          "Y": 2,
          "x": 1,
          "y": 1
      },
      {
          "possibleNumbers": [
              2,
              4,
              7
          ],
          "hasBeenFilled": false,
          "row": 7,
          "column": 8,
          "X": 2,
          "Y": 2,
          "x": 2,
          "y": 1
      },
      {
          "possibleNumbers": [
              3,
              5,
              7,
              9
          ],
          "hasBeenFilled": false,
          "row": 8,
          "column": 0,
          "X": 0,
          "Y": 2,
          "x": 0,
          "y": 2
      },
      {
          "possibleNumbers": [
              3,
              5,
              7,
              9
          ],
          "hasBeenFilled": false,
          "row": 8,
          "column": 1,
          "X": 0,
          "Y": 2,
          "x": 1,
          "y": 2
      },
      {
          "possibleNumbers": [
              1
          ],
          "hasBeenFilled": true,
          "row": 8,
          "column": 2,
          "X": 0,
          "Y": 2,
          "x": 2,
          "y": 2
      },
      {
          "possibleNumbers": [
              3,
              5,
              9
          ],
          "hasBeenFilled": false,
          "row": 8,
          "column": 3,
          "X": 1,
          "Y": 2,
          "x": 0,
          "y": 2
      },
      {
          "possibleNumbers": [
              3,
              4,
              5,
              9
          ],
          "hasBeenFilled": false,
          "row": 8,
          "column": 4,
          "X": 1,
          "Y": 2,
          "x": 1,
          "y": 2
      },
      {
          "possibleNumbers": [
              2
          ],
          "hasBeenFilled": true,
          "row": 8,
          "column": 5,
          "X": 1,
          "Y": 2,
          "x": 2,
          "y": 2
      },
      {
          "possibleNumbers": [
              4,
              5,
              7
          ],
          "hasBeenFilled": false,
          "row": 8,
          "column": 6,
          "X": 2,
          "Y": 2,
          "x": 0,
          "y": 2
      },
      {
          "possibleNumbers": [
              6
          ],
          "hasBeenFilled": true,
          "row": 8,
          "column": 7,
          "X": 2,
          "Y": 2,
          "x": 1,
          "y": 2
      },
      {
          "possibleNumbers": [
              8
          ],
          "hasBeenFilled": true,
          "row": 8,
          "column": 8,
          "X": 2,
          "Y": 2,
          "x": 2,
          "y": 2
      }
  ]
  }
}
