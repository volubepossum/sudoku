import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { CellComponent } from './cell/cell.component';
import { NinecellComponent } from './ninecell/ninecell.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CellComponent,
    NinecellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
