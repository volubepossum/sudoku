import { Component, ViewChild } from '@angular/core';
import { SudokuComponent } from './sudoku/sudoku.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sudoku';
}
