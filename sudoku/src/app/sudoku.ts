export class SudokuType{

  constructor (row: number, column: number){
    this.row = row;
    this.column = column;
    this.X = Math.floor(this.column/3);
    this.Y = Math.floor(this.row/3);
    this.x = this.column%3;
    this.y = this.row%3;
  }

  'row': number;
  'column': number;
  readonly 'X':number;
  readonly 'Y':number;
  readonly 'x':number;
  readonly 'y':number;
  'possibleNumbers': number[] = [1,2,3,4,5,6,7,8,9];
  'hasBeenFilled':boolean = false;
}
