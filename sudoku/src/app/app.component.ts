import { Component} from '@angular/core';
import { SudokuType } from './sudoku';
import { SudokuService } from './sudoku.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor (private _sudokuService: SudokuService){
    this.solvableSudoku = _sudokuService.emptySudoku();
  }
  log(asd: any){
    console.log(asd);
  }
  title = 'sudoku';
  solvedSudokus: SudokuType[][] = [];
  solvableSudoku: SudokuType[];
}
