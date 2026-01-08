import {Component, Input, OnInit} from '@angular/core';
import {Skill} from "../../shared/skill";
import {SkillsService} from "../../shared/skills.service";

@Component({
    selector: 'app-skills-panel',
    templateUrl: './skills-panel.component.html',
    styleUrls: ['./skills-panel.component.css'],
    standalone: false
})
export class SkillsPanelComponent implements OnInit {

  @Input() name: string;
  @Input() icon: string;
  @Input() skills: Skill[];

  constructor(private skillService: SkillsService) { }

  ngOnInit(): void {
  }

  getShowLevel() {
    return this.skillService.showLevel;
  }

  getShowRating() {
    return this.skillService.showRating;
  }

}
