import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
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

  hobbies: { name: string; icon: SafeHtml }[] = [];

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
  ) {}

  ngOnInit(): void {
    this.jobs = this.experienceService.getJobs().slice(0, 4);
    this.certificates = this.certificatesService.certificates.slice(0, 1);

    this.hobbies = [
      { name: 'Photography', icon: this.sanitizer.bypassSecurityTrustHtml('<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-2-10c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm4 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"/></svg>') },
      { name: 'Hiking', icon: this.sanitizer.bypassSecurityTrustHtml('<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"/></svg>') },
      { name: 'Gaming', icon: this.sanitizer.bypassSecurityTrustHtml('<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.58 16.09l-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19h0c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75h0c1.56 0 2.75-1.37 1.58-2.91z"/></svg>') },
      { name: 'Coding', icon: this.sanitizer.bypassSecurityTrustHtml('<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>') },
      { name: 'Reading', icon: this.sanitizer.bypassSecurityTrustHtml('<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>') },
    ];

    this.skillCategories = [
      { name: 'Backend', level: 95 },
      { name: 'Frontend', level: 80 },
      { name: 'DevOps', level: 85 },
      { name: 'Cloud', level: 75 },
      { name: 'Testing', level: 70 },
      { name: 'Leadership', level: 80 },
    ];
  }
}
