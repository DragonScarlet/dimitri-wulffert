import { Injectable } from '@angular/core';
import {Skill} from "./skill";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  programingLanguages = [
    new Skill('Java', 'java', 'red'),
    new Skill('Python', 'python', 'yellow'),
    new Skill('JavaScript', 'javascript', 'yellow'),
    new Skill('TypeScript', 'javascript', 'blue'),
    new Skill('HTML', 'html', 'green'),
    new Skill('css', 'html', 'green'),
  ];
  frameWorks = [
    new Skill('Angular', 'angular', 'red'),
    new Skill('AngularJs', 'angular', 'red'),
    new Skill('Primefaces', 'robot', 'blue'),
    new Skill('Spring', 'leaf', 'green'),
    new Skill('Hibernate', 'db', 'purple'),
    new Skill('Docker', 'docker', 'blue'),
    new Skill('Kubernetes', 'kubernetes', 'blue'),
    new Skill('Mockito', 'mockito', 'purple'),
    new Skill('Cucumber', 'cucumber', 'green'),
    new Skill('JUnit', 'junit', 'blue'),
  ];

  dataBases = [
    new Skill('SQL', 'db', 'purple'),
    new Skill('Postgres', 'db', 'blue'),
    new Skill('ORACLE', 'db', 'red'),
    new Skill('MySQL', 'db', 'blue'),
    new Skill('Mongo', 'db', 'yellow'),
    new Skill('DB2', 'db', 'red'),
  ];

  tools = [
    new Skill('GitKraken', 'gitkraken', 'green'),
    new Skill('SourceTree', 'jira', 'blue'),
    new Skill('BitBucket', 'jira', 'blue'),
    new Skill('Confluence', 'jira', 'blue'),
    new Skill('Jira', 'jira', 'blue'),
    new Skill('IntelliJ', 'jet', 'purple'),
    new Skill('Jenkins', 'jenkins', 'red'),
    new Skill('SonarCube', 'cube', 'purple'),
  ];

  constructor() { }

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

  getAllSkills(){
    return [];
  }
}
