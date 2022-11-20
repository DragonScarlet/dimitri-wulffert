import {Injectable} from '@angular/core';
import {Skill} from "./skill";

// Programing Languages
const JAVA = new Skill('Java', 'java', 'red');
const PYTHON = new Skill('Python', 'python', 'yellow');
const JAVASCRIPT = new Skill('JavaScript', 'javascript', 'yellow');
const TYPESCRIPT = new Skill('TypeScript', 'javascript', 'blue');
const HTML = new Skill('HTML', 'html', 'green');
const CSS = new Skill('css', 'html', 'green');

// FrameWorks
const ANGULAR = new Skill('Angular', 'angular', 'red');
const ANGULARJS = new Skill('AngularJs', 'angular', 'red');
const PRIMEFACES = new Skill('Primefaces', 'robot', 'blue');
const SPRING = new Skill('Spring', 'leaf', 'green');
const HIBERNATE = new Skill('Hibernate', 'db', 'purple');
const DOCKER = new Skill('Docker', 'docker', 'blue');
const KUBERNETES = new Skill('Kubernetes', 'kubernetes', 'blue');
const MOCKITO = new Skill('Mockito', 'mockito', 'purple');
const CUCUMBER = new Skill('Cucumber', 'cucumber', 'green');
const JUNIT = new Skill('JUnit', 'junit', 'blue');

// DataBases
const SQL = new Skill('SQL', 'db', 'purple');
const POSTGRES = new Skill('Postgres', 'db', 'blue');
const ORACLE = new Skill('ORACLE', 'db', 'red');
const MYSQL = new Skill('MySQL', 'db', 'blue');
const MONGO = new Skill('Mongo', 'db', 'yellow');
const DB2 = new Skill('DB2', 'db', 'red');

// Tools
const GITKRAKEN = new Skill('GitKraken', 'gitkraken', 'green');
const SOURCETREE = new Skill('SourceTree', 'jira', 'blue');
const BITBUCKET = new Skill('BitBucket', 'jira', 'blue');
const CONFLUENCE = new Skill('Confluence', 'jira', 'blue');
const JIRA = new Skill('Jira', 'jira', 'blue');
const INTELLIJ = new Skill('IntelliJ', 'jet', 'purple');
const JENKINS = new Skill('Jenkins', 'jenkins', 'red');
const SONARCUBE = new Skill('SonarCube', 'cube', 'purple');

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
