import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from "@angular/material/expansion";
import {ExperienceService} from "./experience.service";

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css'],
    standalone: false
})
export class ExperienceComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
  }

  jobs() {
    return this.experienceService.getJobs();
  }

}
