import {Component, OnInit} from '@angular/core';
import {SkillsService} from "../shared/skills.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
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

  tools() {
    return this.skillService.getTools();
  }
}
