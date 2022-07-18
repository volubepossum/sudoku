import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <div class="btn" (click)="click()"><p>{{content}}</p></div>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  constructor() {
   }

  ngOnInit(): void {
  }

  @Input('content') content: string = "";
  @Input('onclick') click: any = function(){alert('this does nothin...')};
}
