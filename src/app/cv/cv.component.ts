import { Component, OnInit } from '@angular/core';
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

  hobbies = ['Photography', 'Hiking', 'Gaming', 'Coding', 'Reading'];

  constructor(
    private experienceService: ExperienceService,
    private skillsService: SkillsService,
    private certificatesService: CertificatesService,
  ) {}

  ngOnInit(): void {
    this.jobs = this.experienceService.getJobs().slice(0, 4);
    this.certificates = this.certificatesService.certificates.slice(0, 1);

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
