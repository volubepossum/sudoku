import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouteConfigLoadEnd } from '@angular/router';
import { SudokuType } from '../sudoku';

@Component({
  selector: 'app-ninecell',
  template: `
    <div class="three-by-three_grid ninecell">
      <app-cell *ngFor="let _ of [].constructor(9); let i = index" [attr.data-index]="i"
      id="{{'cell'+'X'+numbers[i].X+'Y'+numbers[i].Y+'x'+numbers[i].x+'y'+numbers[i].y}}"
      [id]="'X'+numbers[i].X+'Y'+numbers[i].Y+'x'+numbers[i].x+'y'+numbers[i].y"
      [numbers]="numbers[i].possibleNumbers"
      [hasBeenFilled]="numbers[i].hasBeenFilled"
      (click)="callFill(numbers[i].X,numbers[i].Y,numbers[i].x,numbers[i].y)">
      </app-cell>
    </div>
  `,
  styleUrls: ['./ninecell.component.scss']
})
export class NinecellComponent implements OnInit {
  @Output() cellClick = new EventEmitter<string>();
  callFill(X:number ,Y:number ,x:number ,y:number){
    this.cellClick.emit(''+X+Y+x+y);
  }
  constructor() { }

  ngOnInit(): void {
  }
  @Input('nine-numbers') numbers: SudokuType[] = [];
}
