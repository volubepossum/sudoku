import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cell',
  template: `
    <div [ngClass]="numbers.length >= 2 ? 'small-text-container table-cell-light' : 'simple-text-container table-cell-dark'"
    id="{{id}}">
    <p *ngFor="let number of numbers"
      [style.display]="numbers.length == 2 || (numbers.length == 1 && filled) ? 'initial' : 'none'"
      style="margin:0px">
      {{number}}
    </p>
    </div>
  `,
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input('hasBeenFilled') filled: boolean = false;
  @Input('numbers') numbers: number[] = [0];
  @Input('id') id: string = "";
}
