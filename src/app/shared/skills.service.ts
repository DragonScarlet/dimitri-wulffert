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
const orange = 'orange';
const black = 'black';

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

// New tools from German CV
export const AKHQ = new Skill('AKHQ', 'cube', blue, TOOL, 1);
export const ACTIVE_MQ = new Skill('ActiveMQ', 'cube', blue, TOOL, 1);
export const APACHE_TOMCAT = new Skill('Apache TomCat', 'cube', red, TOOL, 1);

export const BASH = new Skill('Bash', 'cube', yellow, TOOL, 1);
export const BRUNO = new Skill('Bruno', 'cube', purple, TOOL, 1);
export const CAMUNDA = new Skill('Camunda', 'cube', blue, TOOL, 1);
export const CDI = new Skill('CDI', 'cube', blue, TOOL, 1);
export const CLOUDFLARE = new Skill('Cloudflare', 'cube', blue, TOOL, 1);
export const CURL = new Skill('Curl', 'cube', yellow, TOOL, 1);
export const DBBEAVER = new Skill('DBBeaver', 'cube', blue, TOOL, 1);
export const DNS = new Skill('DNS', 'cube', blue, TOOL, 1);
export const DOCKER = new Skill('Docker', 'docker', blue, TOOL, 3);
export const ELASTIC = new Skill('Elastic', 'cube', yellow, TOOL, 1);
export const ELASTICSEARCH = new Skill('ElasticSearch', 'cube', yellow, TOOL, 1);
export const FLUXCD = new Skill('FluxCD', 'cube', blue, TOOL, 1);
export const GITHUB = new Skill('GitHub', 'cube', black, TOOL, 3);
export const GITHUB_ACTIONS = new Skill('GitHub Actions', 'cube', black, TOOL, 1);
export const GITHUB_PAGES = new Skill('GitHub Pages', 'cube', black, TOOL, 1);
export const GITLAB = new Skill('GitLab', 'cube', orange, TOOL, 1);
export const GRAFANA = new Skill('Grafana', 'cube', orange, TOOL, 1);
export const JBOSS = new Skill('JBoss', 'cube', red, TOOL, 1);
export const JMS = new Skill('JMS', 'cube', blue, TOOL, 1);
export const JSON = new Skill('JSON', 'cube', yellow, TOOL, 1);
export const MAVEN = new Skill('Maven', 'cube', red, TOOL, 1);
export const MICROSERVICES = new Skill('Microservices', 'cube', blue, TOOL, 1);
export const NEXUS = new Skill('Nexus', 'cube', blue, TOOL, 1);
export const NPM = new Skill('npm', 'cube', red, TOOL, 1);
export const OPENAPI = new Skill('OpenApi', 'cube', blue, TOOL, 1);
export const OPENSUSE = new Skill('OpenSUSE', 'cube', green, TOOL, 1);
export const OPENSHIFT = new Skill('Openshift', 'cube', red, TOOL, 1);
export const QUARKUS = new Skill('Quarkus', 'cube', red, TOOL, 1);
export const RANCHER = new Skill('Rancher', 'cube', blue, TOOL, 1);
export const REST = new Skill('REST', 'cube', blue, TOOL, 1);
export const SHELL = new Skill('Shell', 'cube', yellow, TOOL, 1);
export const SOAP = new Skill('SOAP', 'cube', blue, TOOL, 1);
export const SONARQUBE = new Skill('Sonarqube', 'cube', green, TOOL, 1);
export const SOURCETREE2 = new Skill('SourceTree', 'jira', blue, TOOL, 1);
export const SWAGGER = new Skill('Swagger', 'cube', green, TOOL, 1);
export const TERRAFORM = new Skill('Terraform', 'cube', purple, TOOL, 1);
export const TESTCONTAINERS = new Skill('TestContainers', 'cube', purple, TOOL, 1);
export const UML = new Skill('UML', 'cube', blue, TOOL, 1);
export const WEBOCKET = new Skill('Websphere', 'cube', blue, TOOL, 1);
export const WSL = new Skill('WSL', 'cube', blue, TOOL, 1);

// Additional missing technologies
export const KAFKA = new Skill('Kafka', 'cube', blue, FRAMEWORK, 1);
export const KUBERNETES2 = new Skill('Kubernetes', 'kubernetes', blue, FRAMEWORK, 1);
export const WILDFLY = new Skill('Wildfly', 'cube', red, TOOL, 1);
export const WSDL = new Skill('WSDL', 'cube', blue, TOOL, 1);
export const XML = new Skill('XML', 'cube', yellow, TOOL, 1);
export const YAML = new Skill('YAML', 'cube', yellow, TOOL, 1);

// Additional missing technologies
export const S3 = new Skill('S3', 'cube', orange, DATA_BASE, 1);
export const MARIADB = new Skill('MariaDb', 'cube', blue, DATA_BASE, 1);
export const SPRINGBOOT2 = new Skill('SpringBoot', 'leaf', green, FRAMEWORK, 1);

// Additional missing technologies
export const J2EE = new Skill('J2EE', 'cube', blue, FRAMEWORK, 1);
export const EJB = new Skill('EJB', 'cube', blue, FRAMEWORK, 1);
export const JPA = new Skill('JPA', 'cube', blue, FRAMEWORK, 1);
export const NEOVIM = new Skill('NeoVim', 'jet', purple, TOOL, 1);
export const BPMN2 = new Skill('BPMN', 'cube', blue, TOOL, 1);
export const SCRUM2 = new Skill('Scrum', 'cube', purple, TOOL, 1);
export const WEBOCKET2 = new Skill('Websphere', 'cube', blue, TOOL, 1);

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
