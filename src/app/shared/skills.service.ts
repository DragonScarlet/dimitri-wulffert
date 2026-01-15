import {Injectable} from '@angular/core';
import {Skill} from "./skill";
import {ExperienceService} from "../experience/experience.service";



export const PROGRAMMING_LANGUAGES = 'Programming Languages';
export const DATABASES = 'Databases';
export const API_TOOLS = 'Tools';
export const FRAMEWORKS = 'Frameworks';

const red = 'red';
const yellow = 'yellow';
const blue = 'blue';
const green = 'green';
const purple = 'purple';
const orange = 'orange';
const black = 'black';

// Programing Languages
export const JAVA = new Skill('Java', 'java', red, PROGRAMMING_LANGUAGES, 3);
export const PYTHON = new Skill('Python', 'python', yellow, PROGRAMMING_LANGUAGES, 3);
export const JAVASCRIPT = new Skill('JavaScript', 'javascript', yellow, PROGRAMMING_LANGUAGES, 3);
export const TYPESCRIPT = new Skill('TypeScript', 'javascript', blue, PROGRAMMING_LANGUAGES, 3);
export const HTML = new Skill('HTML', 'html', green, PROGRAMMING_LANGUAGES, 1);
export const CSS = new Skill('css', 'html', green, PROGRAMMING_LANGUAGES, 1);
export const VB = new Skill('VB', 'cube', blue, PROGRAMMING_LANGUAGES, 1);
export const CSHARP = new Skill('C#', 'cube', yellow, PROGRAMMING_LANGUAGES, 1);
export const CPLUS = new Skill('C++', 'cube', red, PROGRAMMING_LANGUAGES, 1);
export const ANDROID = new Skill('Android', 'robot', green, PROGRAMMING_LANGUAGES, 1);

// FrameWorks
export const ANGULAR = new Skill('Angular', 'angular', red, FRAMEWORKS, 3);
export const ANGULARJS = new Skill('AngularJs', 'angular', red, FRAMEWORKS, 1);
export const JQUERY = new Skill('JQUERY', 'javascript', blue, FRAMEWORKS, 1);
export const JSF = new Skill('JSF', 'java', blue, FRAMEWORKS, 1);
export const PRIMEFACES = new Skill('Primefaces', 'robot', blue, FRAMEWORKS, 1);
export const SPRING = new Skill('Spring', 'leaf', green, FRAMEWORKS,1);
export const HIBERNATE = new Skill('Hibernate', 'db', purple, FRAMEWORKS, 1);

export const KUBERNETES = new Skill('Kubernetes', 'kubernetes', blue, FRAMEWORKS, 3);
export const MOCKITO = new Skill('Mockito', 'mockito', purple, FRAMEWORKS, 3);
export const CUCUMBER = new Skill('Cucumber', 'cucumber', green, FRAMEWORKS, 3);
export const JUNIT = new Skill('JUnit', 'junit', blue, FRAMEWORKS, 3);

// DataBases
export const SQL = new Skill('SQL', 'db', purple, DATABASES, 1);
export const POSTGRES = new Skill('Postgres', 'db', blue, DATABASES, 1);
export const ORACLE = new Skill('ORACLE', 'db', red, DATABASES, 1);
export const MYSQL = new Skill('MySQL', 'db', blue, DATABASES, 1);
export const MONGO = new Skill('Mongo', 'db', yellow, DATABASES, 3);
export const DB2 = new Skill('DB2', 'db', red, DATABASES, 1);

// Tools
export const GITKRAKEN = new Skill('GitKraken', 'gitkraken', green, API_TOOLS, 3);
export const SOURCETREE = new Skill('SourceTree', 'jira', blue, API_TOOLS, 1);
export const BITBUCKET = new Skill('BitBucket', 'jira', blue, API_TOOLS, 1);
export const CONFLUENCE = new Skill('Confluence', 'jira', blue, API_TOOLS, 1);
export const JIRA = new Skill('Jira', 'jira', blue, API_TOOLS, 1);
export const INTELLIJ = new Skill('IntelliJ', 'jet', purple, API_TOOLS, 3);
export const JENKINS = new Skill('Jenkins', 'jenkins', red, API_TOOLS, 1);
export const SONARCUBE = new Skill('SonarCube', 'cube', purple, API_TOOLS, 1);
export const ECLIPSE = new Skill('Eclipse', 'cube', purple, API_TOOLS, 1);
export const SVN = new Skill('SVN', 'cube', yellow, API_TOOLS, 1);
export const GIT = new Skill('GIT', 'cube', purple, API_TOOLS, 3);
export const KIBANA = new Skill('Kibana', 'cube', red, API_TOOLS, 1);
export const SCRUM = new Skill('Scrum', 'cube', purple, API_TOOLS, 1);
export const KANBAN = new Skill('Kanban', 'cube', green, API_TOOLS, 1);
export const UFT = new Skill('UFT', 'cube', yellow, API_TOOLS, 1);
export const ALM = new Skill('ALM', 'cube', yellow, API_TOOLS, 1);
export const UNITY = new Skill('Unity', 'cube', purple, API_TOOLS, 1);

// New tools from German CV
export const AWS = new Skill('AWS', 'cube', blue, API_TOOLS, 1);
export const AKHQ = new Skill('AKHQ', 'cube', blue, API_TOOLS, 1);
export const ACTIVE_MQ = new Skill('ActiveMQ', 'cube', blue, API_TOOLS, 1);
export const APACHE_TOMCAT = new Skill('Apache TomCat', 'cube', red, API_TOOLS, 1);

export const BASH = new Skill('Bash', 'cube', yellow, API_TOOLS, 1);
export const BRUNO = new Skill('Bruno', 'cube', purple, API_TOOLS, 1);
export const CAMUNDA = new Skill('Camunda', 'cube', blue, API_TOOLS, 1);
export const CDI = new Skill('CDI', 'cube', blue, API_TOOLS, 1);
export const CLOUDFLARE = new Skill('Cloudflare', 'cube', blue, API_TOOLS, 1);
export const CURL = new Skill('Curl', 'cube', yellow, API_TOOLS, 1);
export const DBBEAVER = new Skill('DBBeaver', 'cube', blue, API_TOOLS, 1);
export const DNS = new Skill('DNS', 'cube', blue, API_TOOLS, 1);
export const DOCKER = new Skill('Docker', 'docker', blue, API_TOOLS, 3);
export const ELASTIC = new Skill('Elastic', 'cube', yellow, API_TOOLS, 1);
export const ELASTICSEARCH = new Skill('ElasticSearch', 'cube', yellow, API_TOOLS, 1);
export const FLUXCD = new Skill('FluxCD', 'cube', blue, API_TOOLS, 1);
export const GITHUB = new Skill('GitHub', 'cube', black, API_TOOLS, 3);
export const GITHUB_ACTIONS = new Skill('GitHub Actions', 'cube', black, API_TOOLS, 1);
export const GITHUB_PAGES = new Skill('GitHub Pages', 'cube', black, API_TOOLS, 1);
export const GITLAB = new Skill('GitLab', 'cube', orange, API_TOOLS, 1);
export const GRAFANA = new Skill('Grafana', 'cube', orange, API_TOOLS, 1);
export const JBOSS = new Skill('JBoss', 'cube', red, API_TOOLS, 1);
export const JMS = new Skill('JMS', 'cube', blue, API_TOOLS, 1);
export const JSON = new Skill('JSON', 'cube', yellow, API_TOOLS, 1);
export const MAVEN = new Skill('Maven', 'cube', red, API_TOOLS, 1);
export const MICROSERVICES = new Skill('Microservices', 'cube', blue, API_TOOLS, 1);
export const NEXUS = new Skill('Nexus', 'cube', blue, API_TOOLS, 1);
export const NPM = new Skill('npm', 'cube', red, API_TOOLS, 1);
export const OPENAPI = new Skill('OpenApi', 'cube', blue, API_TOOLS, 1);
export const OPENSUSE = new Skill('OpenSUSE', 'cube', green, API_TOOLS, 1);
export const OPENSHIFT = new Skill('Openshift', 'cube', red, API_TOOLS, 1);
export const QUARKUS = new Skill('Quarkus', 'cube', red, API_TOOLS, 1);
export const RANCHER = new Skill('Rancher', 'cube', blue, API_TOOLS, 1);
export const REST = new Skill('REST', 'cube', blue, API_TOOLS, 1);
export const SHELL = new Skill('Shell', 'cube', yellow, API_TOOLS, 1);
export const SOAP = new Skill('SOAP', 'cube', blue, API_TOOLS, 1);
export const SONARQUBE = new Skill('Sonarqube', 'cube', green, API_TOOLS, 1);
export const SOURCETREE2 = new Skill('SourceTree', 'jira', blue, API_TOOLS, 1);
export const SPRINGBOOT = new Skill('SpringBoot', 'leaf', blue, API_TOOLS, 1);
export const SWAGGER = new Skill('Swagger', 'cube', green, API_TOOLS, 1);
export const TERRAFORM = new Skill('Terraform', 'cube', purple, API_TOOLS, 1);
export const TESTCONTAINERS = new Skill('TestContainers', 'cube', purple, API_TOOLS, 1);
export const UML = new Skill('UML', 'cube', blue, API_TOOLS, 1);
export const WEBOCKET = new Skill('Websphere', 'cube', blue, API_TOOLS, 1);
export const WSL = new Skill('WSL', 'cube', blue, API_TOOLS, 1);

// Additional missing technologies
export const KAFKA = new Skill('Kafka', 'cube', blue, FRAMEWORKS, 1);
export const KUBERNETES2 = new Skill('Kubernetes', 'kubernetes', blue, FRAMEWORKS, 1);
export const WILDFLY = new Skill('Wildfly', 'cube', red, API_TOOLS, 1);
export const WSDL = new Skill('WSDL', 'cube', blue, API_TOOLS, 1);
export const XML = new Skill('XML', 'cube', yellow, API_TOOLS, 1);
export const YAML = new Skill('YAML', 'cube', yellow, API_TOOLS, 1);

// Additional missing technologies
export const S3 = new Skill('S3', 'cube', orange, DATABASES, 1);
export const MARIADB = new Skill('MariaDb', 'cube', blue, DATABASES, 1);
export const SPRINGBOOT2 = new Skill('SpringBoot', 'leaf', green, FRAMEWORKS, 1);

// Additional missing technologies
export const J2EE = new Skill('J2EE', 'cube', blue, FRAMEWORKS, 1);
export const EJB = new Skill('EJB', 'cube', blue, FRAMEWORKS, 1);
export const JPA = new Skill('JPA', 'cube', blue, FRAMEWORKS, 1);
export const NEOVIM = new Skill('NeoVim', 'jet', purple, API_TOOLS, 1);
export const BPMN2 = new Skill('BPMN', 'cube', blue, API_TOOLS, 1);
export const SCRUM2 = new Skill('Scrum', 'cube', purple, API_TOOLS, 1);
export const WEBOCKET2 = new Skill('Websphere', 'cube', blue, API_TOOLS, 1);
export const BPMN = new Skill('BPMN', 'cube', blue, API_TOOLS, 1);
export const APACHE_CAMEL = new Skill('ApacheCamel', 'cube', blue, API_TOOLS, 1);

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  programmingLanguages = [];
  frameworks = [];
  databases = [];
  cloudServices = [];
  apiTools = [];
  generalTools = [];
  testingTools = [];
  processes = [];
  showLevel = false;
  showRating = false;

  constructor(private experienceService: ExperienceService) {
    let allJobs = experienceService.getJobs();
    for (let job of allJobs) {
      for (let project of job.projects) {
        for (let skill of project.skills) {
          switch(skill.type) {
            case PROGRAMMING_LANGUAGES: {
              this.pushToList(this.programmingLanguages, skill, project);
              break;
            }
            case FRAMEWORKS: {
              this.pushToList(this.frameworks, skill, project);
              break;
            }
            case DATABASES: {
              this.pushToList(this.databases, skill, project);
              break;
            }
            case API_TOOLS: {
              this.pushToList(this.apiTools, skill, project);
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
    return this.programmingLanguages;
  }

  getFrameworks() {
    return this.frameworks;
  }

  getDataBases() {
    return this.databases;
  }

  getTools() {
    return this.apiTools;
  }

  flipLevel() {
    this.showLevel = !this.showLevel;
  }

  flipRating() {
    this.showRating = !this.showRating;
  }
}
