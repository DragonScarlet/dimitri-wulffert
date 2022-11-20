import {Project} from "./project-panel/Project";


export class Job{

  constructor(public name: string, public company: string, public icon: string, public time: string, public projects: Project[]) {
  }
}
