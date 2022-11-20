import {Component, Input, OnInit} from '@angular/core';
import {Skill} from "../../shared/skill";

@Component({
  selector: 'app-skills-panel',
  templateUrl: './skills-panel.component.html',
  styleUrls: ['./skills-panel.component.css']
})
export class SkillsPanelComponent implements OnInit {

  @Input() name: string;
  @Input() icon: string;
  @Input() skills: Skill[];

  constructor() { }

  ngOnInit(): void {
  }

}
