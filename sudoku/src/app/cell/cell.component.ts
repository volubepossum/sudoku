import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cell',
  template: `
    <div [ngClass]="numbers.length >= 2 ? 'small-text-container table-cell-light' : 'simple-text-container table-cell-dark'">
      <p *ngFor="let number of numbers">{{number}}</p>
    </div>
  `,
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('numbers') numbers: number[] = [];
}
