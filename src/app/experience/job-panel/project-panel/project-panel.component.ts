import {Component, Input, OnInit} from '@angular/core';
import {Project} from "./Project";

@Component({
    selector: 'app-project-panel',
    templateUrl: './project-panel.component.html',
    styleUrls: ['./project-panel.component.css'],
    standalone: false
})
export class ProjectPanelComponent implements OnInit {

  @Input() project: Project;

  constructor() {
  }

  ngOnInit(): void {
  }

}
