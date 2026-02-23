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
  standalone: false
})
export class CvComponent implements OnInit {
  jobs: Job[] = [];
  certificates: Certificate[] = [];
  skills: { [key: string]: Skill[] } = {};
  profileImage = 'https://via.placeholder.com/150';
  name = 'Dimitri Wulffert';
  profession = 'Senior Technical Consultant';
  email = 'dimknight@gmail.com';
  location = 'Munich, Germany';
  linkedin = 'linkedin.com/in/dimitri-wulffert-a63355ba';
  github = 'github.com/DragonScarlet';

  languages = [
    { name: 'German', level: 'Native' },
    { name: 'English', level: 'Fluent' },
    { name: 'Japanese', level: 'Basic' }
  ];

  hobbies = [
    'Photography', 'Hiking', 'Gaming', 'Coding', 'Reading'
  ];

  constructor(
    private experienceService: ExperienceService,
    private skillsService: SkillsService,
    private certificatesService: CertificatesService
  ) {}

  ngOnInit(): void {
    this.jobs = this.experienceService.getJobs();
    this.certificates = this.certificatesService.certificates;
    this.skills = {
      'Programming Languages': this.skillsService.getProgramingLanguages(),
      'Frameworks': this.skillsService.getFrameworks(),
      'Databases': this.skillsService.getDataBases(),
      'Cloud Services': this.skillsService.getCloudServices(),
      'Tools': this.skillsService.getGeneralTools(),
      'Processes': this.skillsService.getProcesses()
    };
  }
}
