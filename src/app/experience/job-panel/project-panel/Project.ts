import {Skill} from "../../../shared/skill";

export class Project {

  constructor(public name: string, public time: number, public description: string, public skills: Skill[], public icon: string) {
  }

}
