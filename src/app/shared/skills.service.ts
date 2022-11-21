import {Injectable} from '@angular/core';
import {Skill} from "./skill";

// Programing Languages
export const JAVA = new Skill('Java', 'java', 'red');
export const PYTHON = new Skill('Python', 'python', 'yellow');
export const JAVASCRIPT = new Skill('JavaScript', 'javascript', 'yellow');
export const TYPESCRIPT = new Skill('TypeScript', 'javascript', 'blue');
export const HTML = new Skill('HTML', 'html', 'green');
export const CSS = new Skill('css', 'html', 'green');
export const VB = new Skill('VB', 'cube', 'blue');
export const CSHARP = new Skill('C#', 'cube', 'yellow');
export const CPLUS = new Skill('C++', 'cube', 'red');
export const ANDROID = new Skill('Android', 'robot', 'green');

// FrameWorks
export const ANGULAR = new Skill('Angular', 'angular', 'red');
export const ANGULARJS = new Skill('AngularJs', 'angular', 'red');
export const JQUERY = new Skill('JQUERY', 'javascript', 'blue');
export const JSF = new Skill('JSF', 'java', 'blue');
export const PRIMEFACES = new Skill('Primefaces', 'robot', 'blue');
export const SPRING = new Skill('Spring', 'leaf', 'green');
export const HIBERNATE = new Skill('Hibernate', 'db', 'purple');
export const DOCKER = new Skill('Docker', 'docker', 'blue');
export const KUBERNETES = new Skill('Kubernetes', 'kubernetes', 'blue');
export const MOCKITO = new Skill('Mockito', 'mockito', 'purple');
export const CUCUMBER = new Skill('Cucumber', 'cucumber', 'green');
export const JUNIT = new Skill('JUnit', 'junit', 'blue');

// DataBases
export const SQL = new Skill('SQL', 'db', 'purple');
export const POSTGRES = new Skill('Postgres', 'db', 'blue');
export const ORACLE = new Skill('ORACLE', 'db', 'red');
export const MYSQL = new Skill('MySQL', 'db', 'blue');
export const MONGO = new Skill('Mongo', 'db', 'yellow');
export const DB2 = new Skill('DB2', 'db', 'red');

// Tools
export const GITKRAKEN = new Skill('GitKraken', 'gitkraken', 'green');
export const SOURCETREE = new Skill('SourceTree', 'jira', 'blue');
export const BITBUCKET = new Skill('BitBucket', 'jira', 'blue');
export const CONFLUENCE = new Skill('Confluence', 'jira', 'blue');
export const JIRA = new Skill('Jira', 'jira', 'blue');
export const INTELLIJ = new Skill('IntelliJ', 'jet', 'purple');
export const JENKINS = new Skill('Jenkins', 'jenkins', 'red');
export const SONARCUBE = new Skill('SonarCube', 'cube', 'purple');
export const ECLIPSE = new Skill('Eclipse', 'cube', 'purple');
export const SVN = new Skill('SVN', 'cube', 'yellow');
export const GIT = new Skill('GIT', 'cube', 'purple');
export const KIBANA = new Skill('Kibana', 'cube', 'red');
export const SCRUM = new Skill('Scrum', 'cube', 'purple');
export const KANBAN = new Skill('Kanban', 'cube', 'green');
export const UFT = new Skill('UFT', 'cube', 'yellow');
export const ALM = new Skill('ALM', 'cube', 'yellow');
export const UNITY = new Skill('Unity', 'cube', 'purple');

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  programingLanguages = [
    JAVA, PYTHON, JAVASCRIPT, TYPESCRIPT, HTML, CSS
  ];
  frameWorks = [
    ANGULAR, ANGULARJS, PRIMEFACES, SPRING, HIBERNATE, DOCKER, KUBERNETES, MOCKITO, CUCUMBER, JUNIT
  ];

  dataBases = [
    SQL, POSTGRES, ORACLE, MYSQL, MONGO, DB2
  ];

  tools = [
    GITKRAKEN, SOURCETREE, BITBUCKET, CONFLUENCE, JIRA, INTELLIJ, JENKINS, SONARCUBE
  ];

  constructor() {
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

  getAllSkills() {
    return [];
  }
}
