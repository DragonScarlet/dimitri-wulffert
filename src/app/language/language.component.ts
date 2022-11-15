import { Component, OnInit } from '@angular/core';
import {ProgressSpinnerMode} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css'],
})
export class LanguageComponent implements OnInit {

  veryLowValue = 0;
  lowValue = 0;
  normalValue = 0;
  highValue = 0;

  constructor() { }

  timeout(value, timer): void {
    setTimeout(() =>
      {
        this.highValue = value;
        if(value < 80){
          this.normalValue = value;
        }
        if(value < 60){
          this.lowValue = value;
        }
        if(value < 30){
          this.veryLowValue = value;
        }
      },
      timer)
  }

  ngOnInit(): void {
    for (let i = 0; i < 105; i = i + 3) {
      this.timeout(i, 25*i)
    }
  }

}
