import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";
import {ExperienceComponent} from "./experience/experience.component";
import {LanguageComponent} from "./language/language.component";

const routes: Routes = [
  { path: 'Profile', component: ProfileComponent },
  { path: 'Experience', component: ExperienceComponent },
  { path: 'Language', component: LanguageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
