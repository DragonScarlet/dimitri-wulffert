import {Injectable} from '@angular/core';
import {Job} from "./job-panel/Job";
import {Project} from "./job-panel/project-panel/Project";
import {
  AWS, AKHQ, ACTIVE_MQ, ALM, ANDROID, ANGULAR,
  ANGULARJS, APACHE_TOMCAT, APACHE_CAMEL,
  BASH, BITBUCKET, BRUNO,
  CDI, CLOUDFLARE, CONFLUENCE, CPLUS, CSHARP, CSS, CUCUMBER, CURL, DB2, DNS, DOCKER, ECLIPSE, ELASTIC, ELASTICSEARCH, EJB, FLUXCD, GIT, GITHUB, GITHUB_ACTIONS, GITHUB_PAGES, GITLAB, GRAFANA, HIBERNATE,
  HTML, INTELLIJ, S3, MYSQL, UNITY, GITKRAKEN,
  J2EE, JAVASCRIPT, JAVA,WEBOCKET, CAMUNDA, BPMN, UML,
  JBOSS, JENKINS, JIRA, JMS, JPA, JSON, JQUERY, SCRUM,
  JSF, JUNIT, KANBAN, KIBANA, KAFKA, KUBERNETES, MAVEN, MICROSERVICES, MOCKITO, MONGO, MARIADB, NPM, NEOVIM, OPENAPI, OPENSUSE, OPENSHIFT, ORACLE, POSTGRES, SPRINGBOOT,
  PRIMEFACES, PYTHON, QUARKUS, RANCHER, REST,  SHELL, SOAP,  SONARCUBE, SOURCETREE, SPRING,  SQL, SVN, SWAGGER, TERRAFORM, TESTCONTAINERS, TYPESCRIPT, UFT, VB, WEBOCKET2, WILDFLY, WSL, WSDL, XML, YAML
} from "../shared/skills.service";

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  jobs: Job[] = [
    new Job('Senior Technical Consultant',
      'bbv Software Services GmbH',
      'assets/companies/bbv_Rakete.svg',
      '2022.10 - present',
      [
        // Current project: Customer Response Management (Aug 2025 - present)
        new Project(
          'Customer Response Management',
          this.getCurrentMonths(new Date(2025, 7)),
          'Ongoing development and maintenance of a customer response management application built with ADITO. As a Full-Stack Developer, I focus on implementing new features, fixing existing bugs, and optimizing code quality and user experience. The solution is based on a JavaScript frontend application (ADITO) and a Java/Quarkus backend.\n\n' +
          'Frontend tasks: Implementation of new features and modules in the ADITO JavaScript app, maintenance and bug fixing of existing codebase, implementation of Quality-of-Life improvements and technical optimizations.\n\n' +
          'Backend tasks: Ensuring correct communication between frontend and backend via defined REST interfaces.\n\n' +
          'Processes & Methods: DevOps, Pair Programming, Code Reviews, CI/CD.\n\n' +
          'Technologies: Java, Bash, Maven, JUnit, GitHub Actions, CI/CD, IntelliJ, WSL, OpenSUSE, GitHub, Quarkus, Hibernate, Microservices, REST, OpenApi, Swagger, Curl, Docker, Kubernetes, Rancher, Jira, Confluence.',
          [JAVA, BASH, MAVEN, JUNIT, GITHUB_ACTIONS, INTELLIJ, WSL, OPENSUSE, GITHUB, QUARKUS, HIBERNATE, MICROSERVICES, REST, OPENAPI, SWAGGER, CURL, DOCKER, KUBERNETES, RANCHER, JIRA, CONFLUENCE],
          'assets/companies/agentur.gif'
        ),
        // ColdScarper project (Jun 2025 - Aug 2025)
        new Project(
          'ColdScarper Web Scraping Service',
          2,
          'Actively developing a Java-based service for extracting information from various websites. We use both Playwright for complex scraping tasks and REST interfaces for direct data retrieval. Ensuring robust operation of the service in AWS cloud environment using DynamoDB for data storage, with close collaboration with team for seamless data transfer to AI agents and quality assurance of generated emails.',
          [JAVA, JUNIT, GITHUB_ACTIONS, INTELLIJ, GITHUB, SPRING, REST, CURL, DOCKER, TERRAFORM, AWS],
          'assets/companies/bbv_Rakete.svg'
        ),
        // BarrierFree.Digital project (May 2025 - Jun 2025)
        new Project(
          'Accessible Frontend Development',
          1,
          'Rapid and flexible support for frontend development. Since internal developers were unavailable, external help was needed to complete the project on time. Created an accessible frontend based on provided images with effective customer communication for timely implementation and delivery.',
          [HTML, CSS, INTELLIJ, CLOUDFLARE, DNS, JAVASCRIPT, SHELL, NPM, GIT, GITHUB],
          'assets/companies/bbv_Rakete.svg'
        ),
        // Register Modernization project (Sep 2024 - May 2025)
        new Project(
          'Register Modernization - Fullstack-DevOps',
          8,
          'Support for senior developer in ongoing development. Software solution needs to be developed from scratch. Provided backend/microservices development with Java and Quarkus, data integration via REST interfaces and Kafka topics, connection to MariaDB and S3 storage, local integration testing with testcontainers, and DevOps support.',
          [JAVA, BASH, MAVEN, JUNIT, TESTCONTAINERS, GITHUB_ACTIONS, FLUXCD, INTELLIJ, WSL, OPENSUSE, GITHUB, QUARKUS, HIBERNATE, MICROSERVICES, REST, OPENAPI, SWAGGER, BRUNO, DOCKER, KUBERNETES, RANCHER, S3, MARIADB, KAFKA, AKHQ, GRAFANA, JIRA, CONFLUENCE],
          'assets/companies/agentur.gif'
        ),
        // Microservices Migration project (Feb 2023 - Sep 2024)
        new Project(
          'Microservices Migration & 3rd Level Support',
          19,
          'Supported a team of two developers as Fullstack Developer in migrating from Openshift 3 (Kubernetes) to Openshift 4 in a microservice architecture with over 50 microservices. Fixed production issues in Angular (TypeScript) frontend, prepared and adapted microservices for migration, fixed production issues in Java/Apache Camel/ActiveMQ backend, and ensured smooth migration through technical infrastructure measures.',
          [JAVA, BASH, JUNIT, MAVEN, JENKINS, GIT, GITLAB, INTELLIJ, NEOVIM, SPRING, SPRINGBOOT, HIBERNATE, APACHE_CAMEL, JMS, MICROSERVICES, REST, CURL, ANGULAR, DOCKER, KUBERNETES, OPENSHIFT, ACTIVE_MQ, KAFKA, ELASTIC, ELASTICSEARCH, MYSQL, JIRA, CONFLUENCE],
          'assets/companies/lh.svg'
        ),
        // Service Update project (Dec 2022 - Feb 2023)
        new Project(
          'Service Update - Backend',
          2,
          'Updated an existing Java application in AWS cloud with focus on updating outdated dependencies to ensure stability and security. Revised and adapted existing tests for compatibility with updated dependencies, and developed scripts for cleaning test data from database to simulate production environment and significantly improve test reliability.',
          [JAVA, PYTHON, JUNIT, INTELLIJ, SPRINGBOOT, HIBERNATE, REST, AWS],
          'assets/companies/bbv_Rakete.svg'
        ),
        // CV Angular Webapp project (Oct 2022 - Dec 2022)
        new Project(
          'CV Angular Web Application',
          2,
          'Extended and modernized frontend knowledge from AngularJS to latest Angular version with focus on TypeScript implementation. Intensive study of new Angular concepts, architecture, and best practices (components, services, routing, reactive programming), and practical application through development of a frontend page for clear and attractive presentation of current professional experience.',
          [ANGULAR, TYPESCRIPT, INTELLIJ, GITHUB, GITHUB_PAGES],
          'assets/companies/angular.png'
        ),
      ]
    ),
new Job('Senior IT Consultant',
      'MSG Nexinsure',
      'assets/companies/msg2.png',
      '2020.07 - 2022.09',
      [
        new Project(
          'Commission Management Software',
          26,
          'MSG Nexinsure needed a component architect for the development commission team at short notice due to knowledge loss from personnel changes. The challenge was to rebuild and maintain the component architecture, and to provide sustainable, maintainable software architecture guidance.\n\n' +
          'Backend: Supported rebuilding and maintenance of component architecture, promoted code quality through Clean Coding practices, consulted and guided the team in sustainable software architecture, ensured complete integration of new services into Camunda environment.\n\n' +
          'Testing/QA: Further development and maintenance of test environments for more efficient execution of automated tests, introduced testing practices in the team including automated tests.\n\n' +
          'Knowledge Management/Coaching: Trained colleagues in Clean Coding, Pair Programming and Testing to ensure knowledge transfer, conducted Clean Coding and GIT training sessions, rebuilt lost knowledge in the team through targeted measures.\n\n' +
          'DevOps: Support for CI/CD pipeline setup and optimization, automated build, test, and reporting processes, provided automated test reports on Confluence page, used AKHQ for checking topic deployment and message reception, created mock messages.',
          [JAVA, J2EE, EJB, SPRING, SPRINGBOOT, JPA, PRIMEFACES, XML, JSON, CSS, SQL, POSTGRES, DB2, ORACLE, MAVEN, JENKINS, SONARCUBE, JUNIT, MOCKITO, CUCUMBER, WSDL, REST, GIT, SVN, SOURCETREE, JIRA, CONFLUENCE, BITBUCKET, KIBANA, SCRUM, SPRING, HIBERNATE, KUBERNETES, WEBOCKET, WILDFLY, CAMUNDA, BPMN, UML],
          'assets/companies/msg2.png'
        ),
      ]
    ),
    new Job('Senior IT Consultant',
      'Aequitas',
      'assets/companies/aequitas2.png',
      '2018.10 - 2020.06',
      [
        new Project('Commission Management Web Application',
          20,
          'MSG Nexinsure\'s commission management web application had performance issues with pages where the data volume was larger than expected and caused disconnections. Not only could I fix the performance issues by introducing lazy-loading tables, but also managed to refactor and clean the code. The application was also significantly faster than before.\n\n' +
          'Frontend: Introduced lazy-loading tables to improve performance, revised existing frontend code to optimize loading times, significantly improved application performance through targeted UI adjustments.\n\n' +
          'Backend: Analysis and fixing of technical causes of performance issues (cross-departmental), refactoring of backend-near logic for performance improvement.\n\n' +
          'Processes & Methods: Kanban, Pair Programming, Clean Code, Code Reviews, CI/CD, 3rd Level Support.',
          [JAVA, PRIMEFACES, SVN, ECLIPSE, SOAP, TESTCONTAINERS, MOCKITO, JUNIT, CUCUMBER, JBOSS, APACHE_TOMCAT, WEBOCKET, WILDFLY, JPA, POSTGRES, DB2, ORACLE, MAVEN, JENKINS, JIRA, CONFLUENCE, SPRING, SPRINGBOOT, HIBERNATE, KUBERNETES, CAMUNDA, BPMN, UML],
          'assets/companies/msg2.png'),
      ]
    ),
new Job('IT Consultant',
      'MVI Solve IT',
      'assets/companies/mvi2.png',
      '2015.09 - 2018.09',
      [
        new Project('BMW Fullstack Web Application',
          7,
          'A full-stack web application could not be completed by the responsible team because they were commissioned with another project at short notice. My job was to replace the team and work out the features that were still needed to complete the project in a timely manner. Through weekly meetings with the original project team, I presented my progress, planned the next steps together, and closed the project in a short time to the full satisfaction of the customer.',
          [JAVA, JSF, PRIMEFACES, JIRA, CONFLUENCE, GIT, SQL, SPRING, HIBERNATE],
          'assets/companies/bmw.png'),
        new Project('Volkswagen Porsche Web Application - Frontend & Backend',
          20,
          'The customer\'s web application was created with a basic frontend design. I managed to set up the corporate design within a very short time. Through transparent and solution-oriented coordination with the customer, I was able to optimize user stories after each sprint and improve communication with the team. After six months I was given sole responsibility for the frontend of the web application and was able to pass on my knowledge to fellow colleagues.',
          [JAVA, JAVASCRIPT, ANGULARJS, ANGULAR, JQUERY, CSS, SQL, JUNIT, JIRA, CONFLUENCE, SPRING, HIBERNATE],
          'assets/companies/vw.png'),
        new Project('Volkswagen Web Portal Testing',
          9,
          'VW needed a tester with knowledge of Japanese and German for its web application. The challenge was to learn and apply the necessary skills as quickly as possible with the technology used by VW. I learned this in a very short time and was able to implement the testing about nine months ahead of schedule. I took sole responsibility for manual and automated testing of Japanese content, as well as reporting and handling bugs.',
          [UFT, ALM, JIRA, CONFLUENCE, VB],
          'assets/companies/vw.png'),
      ]
    ),
    new Job('Research Assistant',
      'Technische Universität Darmstadt',
      'assets/companies/tud.svg',
      '2013.09 - 2015.08',
      [
        new Project('Computer Serious Games Research',
          23,
          'Ported computer serious games to Android, analyzed and represented data using IPython notebook. Focus on mobile game development and data analysis research.',
          [CSHARP, UNITY, ANDROID, PYTHON],
          'assets/companies/tud.svg')
      ]
    ),
    new Job('Researcher',
      'Nagaoka University of Technology',
      'assets/companies/nagaoka.png',
      '2012.09 - 2013.08',
      [
        new Project('EMG Sensor Applications',
          12,
          'Developed two applications using Electromyography (EMG) sensors as part of master exchange program research. Focus on sensor integration and application development for medical monitoring systems.',
          [CPLUS, UNITY],
          'assets/companies/nagaoka.png')
      ]
    ),
    new Job('Hobby',
      'My Projects',
      'assets/companies/artorias.png',
      '2022.10 - present',
      [
        new Project('DS CV NexGen - Self-Hosted CV Application',
          this.getCurrentMonths(new Date(2022, 10)),
          'Developed a self-hosted CV application to test and showcase recently learned Angular skills. Modern, responsive single-page application with glassmorphism design, dynamic skill management, and professional presentation of work experience and education. Implemented with TypeScript, Angular, and MongoDB for data persistence.',
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

  monthDiff(dateFrom, dateTo) {
    return dateTo.getMonth() - dateFrom.getMonth() +
      (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
  }

  getCurrentMonths(startDate) {
    let dateTo = new Date();
    return dateTo.getMonth() - startDate.getMonth() +
      (12 * (dateTo.getFullYear() - startDate.getFullYear()))
  }
}
