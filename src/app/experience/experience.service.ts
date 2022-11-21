import {Injectable} from '@angular/core';
import {Job} from "./job-panel/Job";
import {Project} from "./job-panel/project-panel/Project";
import {
  ALM, ANDROID,
  ANGULARJS,
  BITBUCKET,
  CONFLUENCE, CPLUS, CSHARP,
  CSS, CUCUMBER, DB2, DOCKER, ECLIPSE, GIT,
  HTML,
  JAVA,
  JENKINS, JIRA, JQUERY,
  JSF,
  JUNIT, KANBAN, KIBANA,
  MOCKITO, ORACLE, POSTGRES,
  PRIMEFACES, SCRUM,
  SONARCUBE, SOURCETREE, SQL, SVN, UFT, UNITY, VB
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
          'Worked as a Component Architect for insurance software company. Ensuring software follows the company technical requirements.',
          [JAVA, HTML, CSS, PRIMEFACES, JSF, JENKINS, SONARCUBE, JUNIT, MOCKITO, CUCUMBER, SQL, POSTGRES, DB2, ORACLE, DOCKER, ECLIPSE, SVN, GIT, SOURCETREE, JIRA, CONFLUENCE, BITBUCKET, KIBANA, SCRUM],
          'assets/companies/msg2.png'
        ),
      ]
    ),
    new Job('Senior IT Consultant',
      'Aequitas',
      'assets/companies/aequitas2.png',
      '2018.10 - 2020.06',
      [
        new Project('Frontend-Backend', '2 years', 'Developed and maintained insurance software using Java,SF, Springboot, SQL, SOAP, xHTML, JIRA and Jenkins.',
          [JAVA, HTML, CSS, PRIMEFACES, JSF, JENKINS, SONARCUBE, JUNIT, SQL, POSTGRES, DB2, ORACLE, ECLIPSE, SVN, JIRA, CONFLUENCE, BITBUCKET, KANBAN],
          'assets/companies/msg2.png'),
      ]
    ),
    new Job('IT Consultant',
      'MVI Solve IT',
      'assets/companies/mvi2.png',
      '2015.09 - 2018.09',
      [
        new Project('Frontend-Backend', '1/2 year', 'Finished developing a JSF application.',
          [JAVA, JSF, PRIMEFACES, JIRA, CONFLUENCE, GIT, SQL],
          'assets/companies/bmw.png'),
        new Project('Frontend-Backend', '2 years', 'Responsible for developing front and backend web applications using AngularJS, JQuery, HTML, CSS, SQL and Java.',
          [JAVA, ANGULARJS, JQUERY, CSS, SQL, JUNIT, JIRA, CONFLUENCE],
          'assets/companies/vw.png'),
        new Project('Tester', '1 year', 'Developed automatic and manual tests for VW Car-Net Japan using HP UFT and ALM.',
          [UFT, ALM, JIRA, CONFLUENCE, VB],
          'assets/companies/vw.png'),
      ]
    ),
    new Job('Research Assistant',
      'Technische Universität Darmstadt',
      'assets/companies/tud.svg',
      '2013.09 - 2015.08',
      [
        new Project('Research Assistant', '2 year', 'Ported computer serious games to android using C#. Analyzed and represented data using IPython notebook.',
          [CSHARP, UNITY, ANDROID],
          'assets/companies/tud.svg')
      ]
    ),
    new Job('Researcher',
      'Nagaoka University of Technology',
      'assets/companies/nagaoka.png',
      '2012.09 - 2013.08',
      [
        new Project('Research Assistant', '1 year', 'Developed two applications using Electromyography (EMG) sensors with unity and C++.',
          [CPLUS],
          'assets/companies/nagaoka.png')
      ]
    ),
  ];

  constructor() {
  }

  getJobs() {
    return this.jobs;
  }
}
