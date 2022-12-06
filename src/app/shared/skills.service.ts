import {Injectable} from '@angular/core';
import {Skill} from "./skill";
import {ExperienceService} from "../experience/experience.service";



export const PROGRAMING_LANGUAGE = 'ProgramingLanguage';
export const DATA_BASE = 'DataBase';
export const TOOL = 'Tool';
export const FRAMEWORK = 'FrameWork';

const red = 'red';
const yellow = 'yellow';
const blue = 'blue';
const green = 'green';
const purple = 'purple';

// Programing Languages
export const JAVA = new Skill('Java', 'java', red, PROGRAMING_LANGUAGE, 3);
export const PYTHON = new Skill('Python', 'python', yellow, PROGRAMING_LANGUAGE, 3);
export const JAVASCRIPT = new Skill('JavaScript', 'javascript', yellow, PROGRAMING_LANGUAGE, 3);
export const TYPESCRIPT = new Skill('TypeScript', 'javascript', blue, PROGRAMING_LANGUAGE, 3);
export const HTML = new Skill('HTML', 'html', green, PROGRAMING_LANGUAGE, 1);
export const CSS = new Skill('css', 'html', green, PROGRAMING_LANGUAGE, 1);
export const VB = new Skill('VB', 'cube', blue, PROGRAMING_LANGUAGE, 1);
export const CSHARP = new Skill('C#', 'cube', yellow, PROGRAMING_LANGUAGE, 1);
export const CPLUS = new Skill('C++', 'cube', red, PROGRAMING_LANGUAGE, 1);
export const ANDROID = new Skill('Android', 'robot', green, PROGRAMING_LANGUAGE, 1);

// FrameWorks
export const ANGULAR = new Skill('Angular', 'angular', red, FRAMEWORK, 3);
export const ANGULARJS = new Skill('AngularJs', 'angular', red, FRAMEWORK, 1);
export const JQUERY = new Skill('JQUERY', 'javascript', blue, FRAMEWORK, 1);
export const JSF = new Skill('JSF', 'java', blue, FRAMEWORK, 1);
export const PRIMEFACES = new Skill('Primefaces', 'robot', blue, FRAMEWORK, 1);
export const SPRING = new Skill('Spring', 'leaf', green, FRAMEWORK,1);
export const HIBERNATE = new Skill('Hibernate', 'db', purple, FRAMEWORK, 1);
export const DOCKER = new Skill('Docker', 'docker', blue, FRAMEWORK, 3);
export const KUBERNETES = new Skill('Kubernetes', 'kubernetes', blue, FRAMEWORK, 3);
export const MOCKITO = new Skill('Mockito', 'mockito', purple, FRAMEWORK, 3);
export const CUCUMBER = new Skill('Cucumber', 'cucumber', green, FRAMEWORK, 3);
export const JUNIT = new Skill('JUnit', 'junit', blue, FRAMEWORK, 3);

// DataBases
export const SQL = new Skill('SQL', 'db', purple, DATA_BASE, 1);
export const POSTGRES = new Skill('Postgres', 'db', blue, DATA_BASE, 1);
export const ORACLE = new Skill('ORACLE', 'db', red, DATA_BASE, 1);
export const MYSQL = new Skill('MySQL', 'db', blue, DATA_BASE, 1);
export const MONGO = new Skill('Mongo', 'db', yellow, DATA_BASE, 3);
export const DB2 = new Skill('DB2', 'db', red, DATA_BASE, 1);

// Tools
export const GITKRAKEN = new Skill('GitKraken', 'gitkraken', green, TOOL, 3);
export const SOURCETREE = new Skill('SourceTree', 'jira', blue, TOOL, 1);
export const BITBUCKET = new Skill('BitBucket', 'jira', blue, TOOL, 1);
export const CONFLUENCE = new Skill('Confluence', 'jira', blue, TOOL, 1);
export const JIRA = new Skill('Jira', 'jira', blue, TOOL, 1);
export const INTELLIJ = new Skill('IntelliJ', 'jet', purple, TOOL, 3);
export const JENKINS = new Skill('Jenkins', 'jenkins', red, TOOL, 1);
export const SONARCUBE = new Skill('SonarCube', 'cube', purple, TOOL, 1);
export const ECLIPSE = new Skill('Eclipse', 'cube', purple, TOOL, 1);
export const SVN = new Skill('SVN', 'cube', yellow, TOOL, 1);
export const GIT = new Skill('GIT', 'cube', purple, TOOL, 3);
export const KIBANA = new Skill('Kibana', 'cube', red, TOOL, 1);
export const SCRUM = new Skill('Scrum', 'cube', purple, TOOL, 1);
export const KANBAN = new Skill('Kanban', 'cube', green, TOOL, 1);
export const UFT = new Skill('UFT', 'cube', yellow, TOOL, 1);
export const ALM = new Skill('ALM', 'cube', yellow, TOOL, 1);
export const UNITY = new Skill('Unity', 'cube', purple, TOOL, 1);

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  programingLanguages = [];
  frameWorks = [];
  dataBases = [];
  tools = [];
  showLevel = false;
  showRating = false;

  constructor(private experienceService: ExperienceService) {
    let allJobs = experienceService.getJobs();
    for (let job of allJobs) {
      for (let project of job.projects) {
        for (let skill of project.skills) {
          switch(skill.type) {
            case PROGRAMING_LANGUAGE: {
              this.pushToList(this.programingLanguages, skill, project);
              break;
            }
            case FRAMEWORK: {
              this.pushToList(this.frameWorks, skill, project);
              break;
            }
            case DATA_BASE: {
              this.pushToList(this.dataBases, skill, project);
              break;
            }
            case TOOL: {
              this.pushToList(this.tools, skill, project);
              break;
            }
            default: {
              break;
            }
          }
        }
      }
    }
  }

  pushToList(list, skill, project){
    let index = list.indexOf(skill);
    if(index === -1) {
      list.push(skill);
      index = list.indexOf(skill);
    }
    list[index].levelUp(project.time);
  }

  getProgramingLanguages() {
    return this.programingLanguages;
  }

  getFrameworks() {
    return this.frameWorks;
  }

  getDataBases() {
    return this.dataBases;
  }

  getTools() {
    return this.tools;
  }

  flipLevel() {
    this.showLevel = !this.showLevel;
  }

  flipRating() {
    this.showRating = !this.showRating;
  }
}
