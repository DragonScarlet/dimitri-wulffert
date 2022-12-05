import {Injectable} from '@angular/core';
import {Job} from "./job-panel/Job";
import {Project} from "./job-panel/project-panel/Project";
import {
  ALM, ANDROID, ANGULAR,
  ANGULARJS,
  BITBUCKET,
  CONFLUENCE, CPLUS, CSHARP,
  CSS, CUCUMBER, DB2, DOCKER, ECLIPSE, GIT, GITKRAKEN, HIBERNATE,
  HTML, INTELLIJ,
  JAVA, JAVASCRIPT,
  JENKINS, JIRA, JQUERY,
  JSF,
  JUNIT, KANBAN, KIBANA, KUBERNETES,
  MOCKITO, MONGO, ORACLE, POSTGRES,
  PRIMEFACES, PYTHON, SCRUM,
  SONARCUBE, SOURCETREE, SPRING, SQL, SVN, TYPESCRIPT, UFT, UNITY, VB
} from "../shared/skills.service";

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  jobs: Job[] = [
    new Job('Profesional Consultant',
      'bbv Software Services GmbH',
      'assets/companies/bbv_Rakete.svg',
      '2020.07 - 2022.09',
      []
    ),
    new Job('Senior IT Consultant',
      'MSG Nexinsure',
      'assets/companies/msg2.png',
      '2020.07 - 2022.09',
      [
        new Project(
          'Component Architect',
          '2 years',
          'MSG Nexinsure needed a component architect for the development commission team at short notice. The task was to plan and fullfill the requirements given by the architerure team.\n' +
          'I took on this role to the full satisfaction of the customer and took various measures to improve the quality of my working environment:\n' +
          'On the one hand, I trained my colleagues in clean coding, pair programming and testing, which also ensured future knowledge retention in the team. On the other hand, I maintained our test environments for faster and easier execution of automated tests. In addition, I held training courses on Clean Coding and GIT.' ,
          [JAVA, HTML, CSS, PRIMEFACES, JSF, JENKINS, SONARCUBE, JUNIT, MOCKITO, CUCUMBER, SQL, POSTGRES, DB2, ORACLE, DOCKER, ECLIPSE, SVN, GIT, SOURCETREE, JIRA, CONFLUENCE, BITBUCKET, KIBANA, SCRUM, SPRING, HIBERNATE, KUBERNETES],
          'assets/companies/msg2.png'
        ),
      ]
    ),
    new Job('Senior IT Consultant',
      'Aequitas',
      'assets/companies/aequitas2.png',
      '2018.10 - 2020.06',
      [
        new Project('Frontend-Backend', '2 years',
          'MSG Nexinsure\'s commission management web application was experiencing performance issues with large ammount of data in eager tables, resulting in disconnections. Not only could I fix the performance issues by introducing lazy loading tables but also manage to refactor and clean the code. The application was also significantly faster than before.',
          [JAVA, HTML, CSS, PRIMEFACES, JSF, JENKINS, SONARCUBE, JUNIT, SQL, POSTGRES, DB2, ORACLE, ECLIPSE, SVN, JIRA, CONFLUENCE, BITBUCKET, KANBAN, SPRING, HIBERNATE],
          'assets/companies/msg2.png'),
      ]
    ),
    new Job('IT Consultant',
      'MVI Solve IT',
      'assets/companies/mvi2.png',
      '2015.09 - 2018.09',
      [
        new Project('Frontend-Backend', '1/2 year', 'A full-stack web application could not be completed by the responsible team because they were commissioned with another project at short notice. My job was to replace the team and work out the features that were still needed to complete the project in a timely manner.\n' +
          'Through weekly meetings with the original project team, I presented\n' +
          'my progress, planned the next steps together and closed that\n' +
          'project in a short time to the full satisfaction of the customer.',
          [JAVA, JSF, PRIMEFACES, JIRA, CONFLUENCE, GIT, SQL, SPRING, HIBERNATE],
          'assets/companies/bmw.png'),
        new Project('Frontend-Backend', '2 years', 'The customer\'s web application was created with a basic front end design. I managed to setup the corporate design within a very short time.\n' +
          'Through transparent and solution-oriented coordination with the customer, I was able to optimize the user stories after each sprint and improve communication with the team.\n' +
          'After six months I was given sole responsibility for the front end of the web application and was able to pass on my knowledge to fellow collegues.',
          [JAVA, JAVASCRIPT, ANGULARJS, ANGULAR, JQUERY, CSS, SQL, JUNIT, JIRA, CONFLUENCE, SPRING, HIBERNATE],
          'assets/companies/vw.png'),
        new Project('Tester', '1 year', 'VW needed a tester with knowledge of Japanese and German for its\n' +
          'web application. The challenge was to learn and apply the necessary skills as quickly as possible with the technology used by VW.\n' +
          'I learned this in a very short time and was able to implement the testing about nine months ahead of schedule.\n' +
          'I took sole responsibility for manual and automated testing of Japanese content, as well as reporting and handling bugs.',
          [UFT, ALM, JIRA, CONFLUENCE, VB],
          'assets/companies/vw.png'),
      ]
    ),
    new Job('Research Assistant',
      'Technische Universität Darmstadt',
      'assets/companies/tud.svg',
      '2013.09 - 2015.08',
      [
        new Project('Research Assistant', '2 year', '' +
          'Ported computer serious games to android using. Analyzed and represented data using IPython notebook.',
          [CSHARP, UNITY, ANDROID, PYTHON],
          'assets/companies/tud.svg')
      ]
    ),
    new Job('Researcher',
      'Nagaoka University of Technology',
      'assets/companies/nagaoka.png',
      '2012.09 - 2013.08',
      [
        new Project('Research Assistant', '1 year', 'Developed two applications using Electromyography (EMG) sensors.',
          [CPLUS, UNITY],
          'assets/companies/nagaoka.png')
      ]
    ),
    new Job('Freelancer',
      'My Projects',
      'assets/companies/artorias.png',
      '2022.10 - present',
      [
        new Project('DsCvNex', '2 months', 'Developed a self hosted CV in order to test my recently learned angular skills.',
          [TYPESCRIPT, ANGULAR, INTELLIJ, GITKRAKEN, MONGO],
          'assets/companies/angular.png')
      ]
    ),
  ];

  constructor() {
  }

  getJobs() {
    return this.jobs;
  }
}
