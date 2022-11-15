import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from "@angular/material/expansion";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  panelOpenState = false;
  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor() { }

  ngOnInit(): void {
  }

}
