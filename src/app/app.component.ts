import { Component } from '@angular/core';

import { Texts } from '../sample-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cardInfos: { 
    mouseIsOverDelete: boolean,
    mouseIsOverAdd: boolean,
    text: string
  } [] = Texts.map(text => ({
    mouseIsOverDelete: false,
    mouseIsOverAdd: false,
    text
  }));


}
