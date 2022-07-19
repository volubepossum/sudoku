import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { CellComponent } from './cell/cell.component';
import { NinecellComponent } from './ninecell/ninecell.component';
import { SudokuService } from './sudoku.service';
import { SudokuComponent } from './sudoku/sudoku.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CellComponent,
    NinecellComponent,
    SudokuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SudokuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
