import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { ExperienceService } from '../experience/experience.service';
import { SkillsService } from '../shared/skills.service';
import { CertificatesService } from '../certificates/certificates.service';
import { Job } from '../experience/job-panel/Job';
import { Certificate } from '../certificates/certificate-panel/Certificate';
import { Skill } from '../shared/skill';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  standalone: false,
})
export class CvComponent implements OnInit {
  jobs: Job[] = [];
  certificates: Certificate[] = [];
  skillCategories: { name: string; level: number }[] = [];
  profileImage = 'https://via.placeholder.com/150';
  name = 'Dimitri Wulffert';
  profession = 'Senior Technical Consultant';
  email = 'dimknight@gmail.com';
  location = 'Munich, Germany';
  linkedin = 'linkedin.com/in/dimitri-wulffert-a63355ba';
  github = 'github.com/DragonScarlet';

  languages = [
    { name: 'Spanish', level: 100 },
    { name: 'German', level: 90 },
    { name: 'English', level: 90 },
    { name: 'Japanese', level: 40 },
  ];

  hobbies: { name: string; iconName: string }[] = [];

  technologies: { name: string; iconName: string }[] = [];

  education = [
    { title: 'M.Sc. Computer Science', school: 'Technische Universität Darmstadt', date: '2013 - 2015', icon: 'assets/companies/tud.svg' },
    { title: 'Exchange Program - Computer Science', school: 'Nagaoka University of Technology, Japan', date: '2012 - 2013', icon: 'assets/companies/nagaoka.png' },
    { title: 'B.Sc. Computer Science', school: 'Technische Universität Darmstadt', date: '2010 - 2013', icon: 'assets/companies/tud.svg' },
  ];

  constructor(
    private experienceService: ExperienceService,
    private skillsService: SkillsService,
    private certificatesService: CertificatesService,
    private sanitizer: DomSanitizer,
    private iconRegistry: MatIconRegistry,
  ) {
    this.registerIcons();
  }

  private registerIcons(): void {
    const icons = [
      // Technologies
      { name: 'java', path: './assets/svgs/java.svg' },
      { name: 'angular', path: './assets/svgs/angular.svg' },
      { name: 'python', path: './assets/svgs/python.svg' },
      { name: 'javascript', path: './assets/svgs/javascript.svg' },
      { name: 'docker', path: './assets/svgs/docker.svg' },
      { name: 'kubernetes', path: './assets/svgs/kubernetes.svg' },
      // Hobbies
      { name: 'photography', path: './assets/svgs/camera.svg' },
      { name: 'hiking', path: './assets/svgs/hiking.svg' },
      { name: 'gaming', path: './assets/svgs/gamepad.svg' },
      { name: 'coding', path: './assets/svgs/code.svg' },
      { name: 'reading', path: './assets/svgs/book.svg' },
      // Contacts
      { name: 'mail', path: './assets/contacts/mail.svg' },
      { name: 'location', path: './assets/contacts/location.svg' },
      { name: 'linkedin', path: './assets/contacts/linkedin.svg' },
      { name: 'github', path: './assets/contacts/github.svg' },
    ];

    icons.forEach(icon => {
      try {
        this.iconRegistry.addSvgIcon(
          icon.name,
          this.sanitizer.bypassSecurityTrustResourceUrl(icon.path)
        );
      } catch (error) {
        console.warn(`Failed to register icon: ${icon.name}`, error);
      }
    });
  }

  ngOnInit(): void {
    this.jobs = this.experienceService.getJobs().slice(0, 4);
    this.certificates = this.certificatesService.certificates.slice(0, 1);

    this.hobbies = [
      { name: 'Photography', iconName: 'photography' },
      { name: 'Hiking', iconName: 'hiking' },
      { name: 'Gaming', iconName: 'gaming' },
      { name: 'Coding', iconName: 'coding' },
      { name: 'Reading', iconName: 'reading' },
    ];

    this.skillCategories = [
      { name: 'Backend', level: 95 },
      { name: 'Frontend', level: 80 },
      { name: 'DevOps', level: 85 },
      { name: 'Cloud', level: 75 },
      { name: 'Testing', level: 70 },
      { name: 'Leadership', level: 80 },
    ];

    this.technologies = [
      { name: 'Java', iconName: 'java' },
      { name: 'Angular', iconName: 'angular' },
      { name: 'Python', iconName: 'python' },
      { name: 'Docker', iconName: 'docker' },
      { name: 'Kubernetes', iconName: 'kubernetes' },
      { name: 'JavaScript', iconName: 'javascript' },
    ];
  }
}
