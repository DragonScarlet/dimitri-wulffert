import {Component, Input, OnInit} from '@angular/core';
import {Job} from "./Job";

@Component({
  selector: 'app-job-panel',
  templateUrl: './job-panel.component.html',
  styleUrls: ['./job-panel.component.css']
})
export class JobPanelComponent implements OnInit {

  @Input() job: Job;

  constructor() { }

  ngOnInit(): void {
  }

}
