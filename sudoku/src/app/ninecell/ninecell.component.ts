import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ninecell',
  template: `
    <div class="three-by-three_grid" style="width:33.3%">
      <app-cell *ngFor="let _ of [].constructor(9); let i = index" [attr.data-index]="i"
      id="tablecell{{bigcoordinate+(i/3)+(i%3)}}"
      [numbers]="numbers[i]">
      </app-cell>
    </div>
  `,
  styleUrls: ['./ninecell.component.scss']
})
export class NinecellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('bigcoordinate') bigcoordinate: string = '11';
  @Input('nine-numbers') numbers: number[][] = [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]];
}
