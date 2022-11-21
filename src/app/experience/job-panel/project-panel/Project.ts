import {Skill} from "../../../shared/skill";

export class Project {

  constructor(public name: string, public time: string, public description: string, public skills: Skill[], public icon: string) {
  }

}
