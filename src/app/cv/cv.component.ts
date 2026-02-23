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

  technologies: { name: string; icon: SafeHtml }[] = [];

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

    this.technologies = [
      { name: 'Java', icon: this.sanitizer.bypassSecurityTrustHtml('<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.318 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.949-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 15.077-1.82M17.101 14.198s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.83 10.472c1.705-.102 4.108-.287 4.7-.062 1.816.69-1.997 2.789-4.964 2.506-2.418-.23-3.484-.69-3.484-.69s.653-.457 1.309-.68c.947-.32 2.11-.495 2.439-1.074M14.284 1.989s-6.192 1.447-2.917 1.912c4.381.62 6.68.343 9.6-.201 2.241-.419 4.534-.513 4.534-.513s.14-.332-.172-.514c-2.341-1.336-10.827-.391-11.045-.684M9.734 23.924c4.461.261 11.447-.152 10.869-.934-.579-.781-3.107-.437-6.867-.762 0 0-3.011-1.656-4.002-2.222z"/></svg>') },
      { name: 'Angular', icon: this.sanitizer.bypassSecurityTrustHtml('<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.931 12.645h4.138l-2.07-4.908m0-7.737L.68 3.982l1.726 14.771L12 24l9.596-5.242L23.32 3.984 11.999 0zm6.348 15.321h-2.638l-1.422-3.503H8.712l-1.422 3.504h-2.64L12 2.65z"/></svg>') },
      { name: 'AWS', icon: this.sanitizer.bypassSecurityTrustHtml('<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.296.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51a1.2 1.2 0 0 0 .32-.583c.032-.16.056-.335.056-.527v-.255a6.312 6.312 0 0 0-.735-.136 6.019 6.019 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296z"/></svg>') },
      { name: 'Spring', icon: this.sanitizer.bypassSecurityTrustHtml('<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>') },
      { name: 'Docker', icon: this.sanitizer.bypassSecurityTrustHtml('<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 16.5v-3c0-.28-.22-.5-.5-.5h-2c-.28 0-.5.22-.5.5v2.89c-.59-.34-1.27-.55-2-.55-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5c0-.73-.2-1.42-.55-2H20c.28 0 .5-.22.5-.5v-3c0-.28-.22-.5-.5-.5h-3c-.28 0-.5.22-.5.5 0 .21.13.39.33.46C18.41 15.05 20 13.4 20 11.5c0-2.47-2.02-4.5-4.5-4.5S11 9.03 11 11.5c0 1.26.54 2.39 1.39 3.13.12.12.24.25.33.4.08.14.16.28.22.44.07.18.11.38.11.59v2.44h-2v-2.59c0-.19-.03-.38-.09-.55-.19-.56-.66-.96-1.21-.96z"/></svg>') },
      { name: 'Kubernetes', icon: this.sanitizer.bypassSecurityTrustHtml('<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>') },
    ];
  }
}
