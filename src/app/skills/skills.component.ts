import {Component, OnInit} from '@angular/core';
import {SkillsService} from "../shared/skills.service";
import {ThemePalette} from "@angular/material/core";

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css'],
    standalone: false
})
export class SkillsComponent implements OnInit {

  constructor(private skillService: SkillsService) {
  }

  ngOnInit(): void {
  }

  programingLanguages() {
    return this.skillService.getProgramingLanguages();
  }

  frameWorks() {
    return this.skillService.getFrameworks();
  }

  dataBases() {
    return this.skillService.getDataBases();
  }

  apiTools() {
    return this.skillService.getApiTools();
  }

  cloudServices() {
    return this.skillService.getCloudServices();
  }

  generalTools() {
    return this.skillService.getGeneralTools();
  }

  testingTools() {
    return this.skillService.getTestingTools();
  }

  processes() {
    return this.skillService.getProcesses();
  }

  flipLevel() {
    this.skillService.flipLevel();
  }

  flipRating() {
    this.skillService.flipRating();
  }

  getLevelColor() : ThemePalette{
    if(this.skillService.showLevel){
      return "warn";
    }
    return undefined;
  }

  getRatingColor() : ThemePalette{
    if(this.skillService.showRating){
      return "primary";
    }
    return undefined;
  }
}
