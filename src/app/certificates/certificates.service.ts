import { Injectable } from '@angular/core';
import {Certificate} from "./certificate-panel/Certificate";

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {

  certificates : Certificate[] = [
    new Certificate(
      'Docker',
      'Docker & Kubernetes: The Practical Guide',
      'assets/companies/docker.png',
      'https://www.udemy.com/course/docker-kubernetes-the-practical-guide/',
      'https://www.udemy.com/certificate/UC-ba382e33-e737-45ff-8204-15d852ee7776/'),
    new Certificate(
      'Kubernetes',
      'Docker & Kubernetes: The Practical Guide',
      'assets/companies/kubernetes.png',
      'https://www.udemy.com/course/docker-kubernetes-the-practical-guide/',
      'https://www.udemy.com/certificate/UC-ba382e33-e737-45ff-8204-15d852ee7776/'),
    new Certificate(
      'Angular',
      'Angular - The Complete Guide',
      'assets/companies/angular.png',
      'https://www.udemy.com/course/the-complete-guide-to-angular-2/',
      'https://www.udemy.com/certificate/UC-96aadcb7-7992-4f40-9dc9-292784005c65/'),
    new Certificate(
      'Clean Coding',
      'Clean Code',
      'assets/companies/clean.png',
      'https://www.udemy.com/course/writing-clean-code/',
      'https://www.udemy.com/certificate/UC-1251cda8-4d2d-4caa-8e3f-864b4431d669/'),
    new Certificate(
      'AWS',
      '',
      'assets/companies/aws.png',
      'https://www.udemy.com/course/aws-cloud-practitioner-complete-aws-introduction/',
      ''),
    new Certificate(
      'Apache Camel',
      '',
      'assets/companies/camel.png',
      'https://www.udemy.com/course/apache-camel-framework-with-spring-boot/',
      ''),
  ];

  constructor() { }
}
