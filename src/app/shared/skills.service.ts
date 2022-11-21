import {Injectable} from '@angular/core';
import {Skill} from "./skill";
import {ExperienceService} from "../experience/experience.service";



const programingLanguage = 'ProgramingLanguage';
const dataBase = 'DataBase';
const tool = 'Tool';
const frameWork = 'FrameWork';

const red = 'red';
const yellow = 'yellow';
const blue = 'blue';
const green = 'green';
const purple = 'purple';

// Programing Languages
export const JAVA = new Skill('Java', 'java', red, programingLanguage);
export const PYTHON = new Skill('Python', 'python', yellow, programingLanguage);
export const JAVASCRIPT = new Skill('JavaScript', 'javascript', yellow, programingLanguage);
export const TYPESCRIPT = new Skill('TypeScript', 'javascript', blue, programingLanguage);
export const HTML = new Skill('HTML', 'html', green, programingLanguage);
export const CSS = new Skill('css', 'html', green, programingLanguage);
export const VB = new Skill('VB', 'cube', blue, programingLanguage);
export const CSHARP = new Skill('C#', 'cube', yellow, programingLanguage);
export const CPLUS = new Skill('C++', 'cube', red, programingLanguage);
export const ANDROID = new Skill('Android', 'robot', green, programingLanguage);

// FrameWorks
export const ANGULAR = new Skill('Angular', 'angular', red, frameWork);
export const ANGULARJS = new Skill('AngularJs', 'angular', red, frameWork);
export const JQUERY = new Skill('JQUERY', 'javascript', blue, frameWork);
export const JSF = new Skill('JSF', 'java', blue, frameWork);
export const PRIMEFACES = new Skill('Primefaces', 'robot', blue, frameWork);
export const SPRING = new Skill('Spring', 'leaf', green, frameWork);
export const HIBERNATE = new Skill('Hibernate', 'db', purple, frameWork);
export const DOCKER = new Skill('Docker', 'docker', blue, frameWork);
export const KUBERNETES = new Skill('Kubernetes', 'kubernetes', blue, frameWork);
export const MOCKITO = new Skill('Mockito', 'mockito', purple, frameWork);
export const CUCUMBER = new Skill('Cucumber', 'cucumber', green, frameWork);
export const JUNIT = new Skill('JUnit', 'junit', blue, frameWork);

// DataBases
export const SQL = new Skill('SQL', 'db', purple, dataBase);
export const POSTGRES = new Skill('Postgres', 'db', blue, dataBase);
export const ORACLE = new Skill('ORACLE', 'db', red, dataBase);
export const MYSQL = new Skill('MySQL', 'db', blue, dataBase);
export const MONGO = new Skill('Mongo', 'db', yellow, dataBase);
export const DB2 = new Skill('DB2', 'db', red, dataBase);

// Tools
export const GITKRAKEN = new Skill('GitKraken', 'gitkraken', green, tool);
export const SOURCETREE = new Skill('SourceTree', 'jira', blue, tool);
export const BITBUCKET = new Skill('BitBucket', 'jira', blue, tool);
export const CONFLUENCE = new Skill('Confluence', 'jira', blue, tool);
export const JIRA = new Skill('Jira', 'jira', blue, tool);
export const INTELLIJ = new Skill('IntelliJ', 'jet', purple, tool);
export const JENKINS = new Skill('Jenkins', 'jenkins', red, tool);
export const SONARCUBE = new Skill('SonarCube', 'cube', purple, tool);
export const ECLIPSE = new Skill('Eclipse', 'cube', purple, tool);
export const SVN = new Skill('SVN', 'cube', yellow, tool);
export const GIT = new Skill('GIT', 'cube', purple, tool);
export const KIBANA = new Skill('Kibana', 'cube', red, tool);
export const SCRUM = new Skill('Scrum', 'cube', purple, tool);
export const KANBAN = new Skill('Kanban', 'cube', green, tool);
export const UFT = new Skill('UFT', 'cube', yellow, tool);
export const ALM = new Skill('ALM', 'cube', yellow, tool);
export const UNITY = new Skill('Unity', 'cube', purple, tool);

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
            case programingLanguage: {
              this.pushToList(this.programingLanguages, skill);
              break;
            }
            case frameWork: {
              this.pushToList(this.frameWorks, skill);
              break;
            }
            case dataBase: {
              this.pushToList(this.dataBases, skill);
              break;
            }
            case tool: {
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
