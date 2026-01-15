import {Injectable} from '@angular/core';
import {Skill} from "./skill";
import {ExperienceService} from "../experience/experience.service";



export const PROGRAMMING_LANGUAGES = 'Programming Languages';
export const DATABASES = 'Databases';
export const FRAMEWORKS = 'Frameworks';
export const CLOUD_SERVICES = 'Cloud Services';
export const API_TOOLS = 'API Tools';
export const GENERAL_TOOLS = 'General Tools';
export const TESTING_TOOLS = 'Testing Tools';
export const PROCESSES = 'Processes';

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
export const SPRINGBOOT = new Skill('Spring', 'leaf', green, FRAMEWORKS,1);
export const HIBERNATE = new Skill('Hibernate', 'db', purple, FRAMEWORKS, 1);

export const KUBERNETES = new Skill('Kubernetes', 'kubernetes', blue, CLOUD_SERVICES, 3);
export const MOCKITO = new Skill('Mockito', 'mockito', purple, TESTING_TOOLS, 3);
export const CUCUMBER = new Skill('Cucumber', 'cucumber', green, TESTING_TOOLS, 3);
export const JUNIT = new Skill('JUnit', 'junit', blue, TESTING_TOOLS, 3);

// DataBases
export const SQL = new Skill('SQL', 'db', purple, DATABASES, 1);
export const POSTGRES = new Skill('Postgres', 'db', blue, DATABASES, 1);
export const ORACLE = new Skill('ORACLE', 'db', red, DATABASES, 1);
export const MYSQL = new Skill('MySQL', 'db', blue, DATABASES, 1);
export const MONGO = new Skill('Mongo', 'db', yellow, DATABASES, 3);
export const DB2 = new Skill('DB2', 'db', red, DATABASES, 1);

// API Tools
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

// Processes
export const SCRUM = new Skill('Scrum', 'cube', purple, PROCESSES, 1);
export const KANBAN = new Skill('Kanban', 'cube', green, PROCESSES, 1);
export const UFT = new Skill('UFT', 'cube', yellow, TESTING_TOOLS, 1);
export const ALM = new Skill('ALM', 'cube', yellow, GENERAL_TOOLS, 1);
export const UNITY = new Skill('Unity', 'cube', purple, GENERAL_TOOLS, 1);

// Cloud Services
export const AWS = new Skill('AWS', 'cube', blue, CLOUD_SERVICES, 1);

// General Tools
export const AKHQ = new Skill('AKHQ', 'cube', blue, GENERAL_TOOLS, 1);
export const ACTIVE_MQ = new Skill('ActiveMQ', 'cube', blue, GENERAL_TOOLS, 1);
export const APACHE_TOMCAT = new Skill('Apache TomCat', 'cube', red, GENERAL_TOOLS, 1);

// General Tools
export const BASH = new Skill('Bash', 'cube', yellow, GENERAL_TOOLS, 1);
export const BRUNO = new Skill('Bruno', 'cube', purple, GENERAL_TOOLS, 1);
export const CAMUNDA = new Skill('Camunda', 'cube', blue, GENERAL_TOOLS, 1);
export const CDI = new Skill('CDI', 'cube', blue, FRAMEWORKS, 1);
export const CURL = new Skill('Curl', 'cube', yellow, GENERAL_TOOLS, 1);
export const DBBEAVER = new Skill('DBBeaver', 'cube', blue, GENERAL_TOOLS, 1);
export const DNS = new Skill('DNS', 'cube', blue, GENERAL_TOOLS, 1);
export const DOCKER = new Skill('Docker', 'docker', blue, GENERAL_TOOLS, 3);
export const ELASTIC = new Skill('Elastic', 'cube', yellow, GENERAL_TOOLS, 1);
export const ELASTICSEARCH = new Skill('ElasticSearch', 'cube', yellow, GENERAL_TOOLS, 1);
export const JBOSS = new Skill('JBoss', 'cube', red, GENERAL_TOOLS, 1);
export const MAVEN = new Skill('Maven', 'cube', red, GENERAL_TOOLS, 1);
export const NEXUS = new Skill('Nexus', 'cube', blue, GENERAL_TOOLS, 1);
export const NPM = new Skill('npm', 'cube', red, GENERAL_TOOLS, 1);
export const OPENSUSE = new Skill('OpenSUSE', 'cube', green, GENERAL_TOOLS, 1);
export const QUARKUS = new Skill('Quarkus', 'cube', red, FRAMEWORKS, 1);
export const SHELL = new Skill('Shell', 'cube', yellow, GENERAL_TOOLS, 1);
export const WSL = new Skill('WSL', 'cube', blue, GENERAL_TOOLS, 1);

// Cloud Services
export const CLOUDFLARE = new Skill('Cloudflare', 'cube', blue, CLOUD_SERVICES, 1);
export const FLUXCD = new Skill('FluxCD', 'cube', blue, CLOUD_SERVICES, 1);
export const OPENSHIFT = new Skill('Openshift', 'cube', red, CLOUD_SERVICES, 1);
export const RANCHER = new Skill('Rancher', 'cube', blue, CLOUD_SERVICES, 1);
export const TERRAFORM = new Skill('Terraform', 'cube', purple, CLOUD_SERVICES, 1);

// API Tools
export const GITHUB = new Skill('GitHub', 'cube', black, API_TOOLS, 3);
export const GITHUB_ACTIONS = new Skill('GitHub Actions', 'cube', black, API_TOOLS, 1);
export const GITHUB_PAGES = new Skill('GitHub Pages', 'cube', black, API_TOOLS, 1);
export const GITLAB = new Skill('GitLab', 'cube', orange, API_TOOLS, 1);
export const GRAFANA = new Skill('Grafana', 'cube', orange, API_TOOLS, 1);
export const KIBANA = new Skill('Kibana', 'cube', red, API_TOOLS, 1);
export const SONARQUBE = new Skill('Sonarqube', 'cube', green, API_TOOLS, 1);

// Processes
export const MICROSERVICES = new Skill('Microservices', 'cube', blue, PROCESSES, 1);
export const OPENAPI = new Skill('OpenApi', 'cube', blue, PROCESSES, 1);
export const REST = new Skill('REST', 'cube', blue, PROCESSES, 1);
export const SOAP = new Skill('SOAP', 'cube', blue, PROCESSES, 1);
export const SWAGGER = new Skill('Swagger', 'cube', green, PROCESSES, 1);
export const UML = new Skill('UML', 'cube', blue, PROCESSES, 1);
export const WEBOCKET = new Skill('Websphere', 'cube', blue, PROCESSES, 1);
export const JMS = new Skill('JMS', 'cube', blue, PROCESSES, 1);
export const JSON = new Skill('JSON', 'cube', yellow, PROCESSES, 1);

// Testing Tools
export const TESTCONTAINERS = new Skill('TestContainers', 'cube', purple, TESTING_TOOLS, 1);

// Additional missing technologies
export const KAFKA = new Skill('Kafka', 'cube', blue, FRAMEWORKS, 1);
export const WILDFLY = new Skill('Wildfly', 'cube', red, GENERAL_TOOLS, 1);

// Processes
export const WSDL = new Skill('WSDL', 'cube', blue, PROCESSES, 1);
export const XML = new Skill('XML', 'cube', yellow, PROCESSES, 1);
export const YAML = new Skill('YAML', 'cube', yellow, PROCESSES, 1);

// Additional missing technologies
export const S3 = new Skill('S3', 'cube', orange, DATABASES, 1);
export const MARIADB = new Skill('MariaDb', 'cube', blue, DATABASES, 1);

// Additional missing technologies
export const J2EE = new Skill('J2EE', 'cube', blue, FRAMEWORKS, 1);
export const EJB = new Skill('EJB', 'cube', blue, FRAMEWORKS, 1);
export const JPA = new Skill('JPA', 'cube', blue, FRAMEWORKS, 1);

// General Tools
export const NEOVIM = new Skill('NeoVim', 'jet', purple, GENERAL_TOOLS, 1);
export const APACHE_CAMEL = new Skill('ApacheCamel', 'cube', blue, GENERAL_TOOLS, 1);

// Processes
export const SCRUM2 = new Skill('Scrum', 'cube', purple, PROCESSES, 1);
export const WEBOCKET2 = new Skill('Websphere', 'cube', blue, PROCESSES, 1);
export const BPMN = new Skill('BPMN', 'cube', blue, PROCESSES, 1);

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
            case CLOUD_SERVICES: {
              this.pushToList(this.cloudServices, skill, project);
              break;
            }
            case API_TOOLS: {
              this.pushToList(this.apiTools, skill, project);
              break;
            }
            case GENERAL_TOOLS: {
              this.pushToList(this.generalTools, skill, project);
              break;
            }
            case TESTING_TOOLS: {
              this.pushToList(this.testingTools, skill, project);
              break;
            }
            case PROCESSES: {
              this.pushToList(this.processes, skill, project);
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

  getCloudServices() {
    return this.cloudServices;
  }

  getGeneralTools() {
    return this.generalTools;
  }

  getTestingTools() {
    return this.testingTools;
  }

  getProcesses() {
    return this.processes;
  }

  flipLevel() {
    this.showLevel = !this.showLevel;
  }

  flipRating() {
    this.showRating = !this.showRating;
  }
}
