import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatSliderModule} from "@angular/material/slider";
import { HeaderComponent } from './header/header.component';
import {MatTabsModule} from "@angular/material/tabs";
import { ProfileComponent } from './profile/profile.component';
import { ExperienceComponent } from './experience/experience.component';
import { LanguageComponent } from './language/language.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {CdkAccordionModule} from "@angular/cdk/accordion";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { HobbiesComponent } from './hobbies/hobbies.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { SkillsComponent } from './skills/skills.component';
import {MatChipsModule} from "@angular/material/chips";
import {MatDividerModule} from "@angular/material/divider";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { ChipComponent } from './shared/chip/chip.component';
import { ImagePipe } from './shared/pipes/image.pipe';
import { CertificatesComponent } from './certificates/certificates.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { SkillsPanelComponent } from './skills/skills-panel/skills-panel.component';
import { JobPanelComponent } from './experience/job-panel/job-panel.component';
import { ProjectPanelComponent } from './experience/job-panel/project-panel/project-panel.component';
import { CertificatePanelComponent } from './certificates/certificate-panel/certificate-panel.component';
import { SortPipe } from './shared/pipes/sort.pipe';
import {MatBadgeModule} from "@angular/material/badge";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    ExperienceComponent,
    LanguageComponent,
    HobbiesComponent,
    SkillsComponent,
    ChipComponent,
    ImagePipe,
    CertificatesComponent,
    AboutComponent,
    EducationComponent,
    SkillsPanelComponent,
    JobPanelComponent,
    ProjectPanelComponent,
    CertificatePanelComponent,
    SortPipe
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatSliderModule,
        MatTabsModule,
        MatExpansionModule,
        CdkAccordionModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatGridListModule,
        MatChipsModule,
        MatDividerModule,
        MatProgressBarModule,
        MatTooltipModule,
        MatBadgeModule,
        MatSlideToggleModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
