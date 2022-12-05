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
export const JAVA = new Skill('Java', 'java', red, PROGRAMING_LANGUAGE);
export const PYTHON = new Skill('Python', 'python', yellow, PROGRAMING_LANGUAGE);
export const JAVASCRIPT = new Skill('JavaScript', 'javascript', yellow, PROGRAMING_LANGUAGE);
export const TYPESCRIPT = new Skill('TypeScript', 'javascript', blue, PROGRAMING_LANGUAGE);
export const HTML = new Skill('HTML', 'html', green, PROGRAMING_LANGUAGE);
export const CSS = new Skill('css', 'html', green, PROGRAMING_LANGUAGE);
export const VB = new Skill('VB', 'cube', blue, PROGRAMING_LANGUAGE);
export const CSHARP = new Skill('C#', 'cube', yellow, PROGRAMING_LANGUAGE);
export const CPLUS = new Skill('C++', 'cube', red, PROGRAMING_LANGUAGE);
export const ANDROID = new Skill('Android', 'robot', green, PROGRAMING_LANGUAGE);

// FrameWorks
export const ANGULAR = new Skill('Angular', 'angular', red, FRAMEWORK);
export const ANGULARJS = new Skill('AngularJs', 'angular', red, FRAMEWORK);
export const JQUERY = new Skill('JQUERY', 'javascript', blue, FRAMEWORK);
export const JSF = new Skill('JSF', 'java', blue, FRAMEWORK);
export const PRIMEFACES = new Skill('Primefaces', 'robot', blue, FRAMEWORK);
export const SPRING = new Skill('Spring', 'leaf', green, FRAMEWORK);
export const HIBERNATE = new Skill('Hibernate', 'db', purple, FRAMEWORK);
export const DOCKER = new Skill('Docker', 'docker', blue, FRAMEWORK);
export const KUBERNETES = new Skill('Kubernetes', 'kubernetes', blue, FRAMEWORK);
export const MOCKITO = new Skill('Mockito', 'mockito', purple, FRAMEWORK);
export const CUCUMBER = new Skill('Cucumber', 'cucumber', green, FRAMEWORK);
export const JUNIT = new Skill('JUnit', 'junit', blue, FRAMEWORK);

// DataBases
export const SQL = new Skill('SQL', 'db', purple, DATA_BASE);
export const POSTGRES = new Skill('Postgres', 'db', blue, DATA_BASE);
export const ORACLE = new Skill('ORACLE', 'db', red, DATA_BASE);
export const MYSQL = new Skill('MySQL', 'db', blue, DATA_BASE);
export const MONGO = new Skill('Mongo', 'db', yellow, DATA_BASE);
export const DB2 = new Skill('DB2', 'db', red, DATA_BASE);

// Tools
export const GITKRAKEN = new Skill('GitKraken', 'gitkraken', green, TOOL);
export const SOURCETREE = new Skill('SourceTree', 'jira', blue, TOOL);
export const BITBUCKET = new Skill('BitBucket', 'jira', blue, TOOL);
export const CONFLUENCE = new Skill('Confluence', 'jira', blue, TOOL);
export const JIRA = new Skill('Jira', 'jira', blue, TOOL);
export const INTELLIJ = new Skill('IntelliJ', 'jet', purple, TOOL);
export const JENKINS = new Skill('Jenkins', 'jenkins', red, TOOL);
export const SONARCUBE = new Skill('SonarCube', 'cube', purple, TOOL);
export const ECLIPSE = new Skill('Eclipse', 'cube', purple, TOOL);
export const SVN = new Skill('SVN', 'cube', yellow, TOOL);
export const GIT = new Skill('GIT', 'cube', purple, TOOL);
export const KIBANA = new Skill('Kibana', 'cube', red, TOOL);
export const SCRUM = new Skill('Scrum', 'cube', purple, TOOL);
export const KANBAN = new Skill('Kanban', 'cube', green, TOOL);
export const UFT = new Skill('UFT', 'cube', yellow, TOOL);
export const ALM = new Skill('ALM', 'cube', yellow, TOOL);
export const UNITY = new Skill('Unity', 'cube', purple, TOOL);

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  programingLanguages = [];
  frameWorks = [];
  dataBases = [];
  tools = [];

  constructor(private experienceService: ExperienceService) {
    let allJobs = experienceService.getJobs();
    for (let job of allJobs) {
      for (let project of job.projects) {
        for (let skill of project.skills) {
          switch(skill.type) {
            case PROGRAMING_LANGUAGE: {
              this.pushToList(this.programingLanguages, skill);
              break;
            }
            case FRAMEWORK: {
              this.pushToList(this.frameWorks, skill);
              break;
            }
            case DATA_BASE: {
              this.pushToList(this.dataBases, skill);
              break;
            }
            case TOOL: {
              this.pushToList(this.tools, skill);
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

  pushToList(list, skill){
    if(list.indexOf(skill) === -1) {
      list.push(skill);
    }
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
}
