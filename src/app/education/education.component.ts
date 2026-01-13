import { Component, OnInit } from '@angular/core';

export interface EducationItem {
  text: string;
  iconName?: string;
  imagePath?: string;
  imageAlt?: string;
  color: string;
  tooltip: string;
}

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.css'],
    standalone: false
})
export class EducationComponent implements OnInit {

  educationItems: EducationItem[] = [
    {
      text: 'Professional Consultant',
      imagePath: 'assets/companies/bbv.png',
      imageAlt: 'BBV Logo',
      color: 'blue',
      tooltip: 'Currently working here :)'
    },
    {
      text: 'Senior IT Consultant',
      imagePath: 'assets/companies/msg4.jpg',
      imageAlt: 'MSG Logo',
      color: 'red',
      tooltip: 'This was my last job'
    },
    {
      text: 'Senior IT Consultant',
      imagePath: 'assets/companies/aequitas.png',
      imageAlt: 'Aequitas Logo',
      color: 'green',
      tooltip: 'Previous consulting role'
    },
    {
      text: 'IT Consultant',
      imagePath: 'assets/companies/mvi3.jpg',
      imageAlt: 'MVI Logo',
      color: 'green',
      tooltip: 'Early consulting role'
    },
    {
      text: 'Master of Science',
      imagePath: 'assets/companies/tud.svg',
      imageAlt: 'TU Darmstadt Logo',
      color: 'blue',
      tooltip: 'My highest education level'
    },
    {
      text: 'Bachelor of Science',
      imagePath: 'assets/companies/tud.svg',
      imageAlt: 'TU Darmstadt Logo',
      color: 'red',
      tooltip: 'My secondary education level'
    },
    {
      text: 'International Exchange',
      imagePath: 'assets/companies/nagaoka.png',
      imageAlt: 'Nagaoka University Logo',
      color: 'purple',
      tooltip: 'Study abroad experience'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
