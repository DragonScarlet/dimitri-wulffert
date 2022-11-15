import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";
import {ExperienceComponent} from "./experience/experience.component";
import {LanguageComponent} from "./language/language.component";
import {HobbiesComponent} from "./hobbies/hobbies.component";
import {SkillsComponent} from "./skills/skills.component";
import {CertificatesComponent} from "./certificates/certificates.component";
import {EducationComponent} from "./education/education.component";

const routes: Routes = [
  { path: 'Profile', component: ProfileComponent },
  { path: 'Experience', component: ExperienceComponent },
  { path: 'Languages', component: LanguageComponent },
  { path: 'Skills', component: SkillsComponent },
  { path: 'Hobbies', component: HobbiesComponent },
  { path: 'Certificates', component: CertificatesComponent },
  { path: 'Education', component: EducationComponent },
  { path: '**', redirectTo: 'Profile' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
