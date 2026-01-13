import {Component, Input, OnInit} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {ThemePalette} from "@angular/material/core";

@Component({
    selector: 'app-chip',
    templateUrl: './chip.component.html',
    styleUrls: ['./chip.component.css'],
    standalone: false
})
export class ChipComponent implements OnInit {

  @Input() text: string;
  @Input() iconName: string;
  @Input() color: string;
  @Input() level: number;
  @Input() showLevel: boolean;
  @Input() showRating: boolean;
  @Input() rating: number;
  chipColor : ThemePalette = undefined;


  getLevelColor() : ThemePalette {
    if(this.level > 48){
      return "primary";
    }
    if(this.level > 24){
      return "warn";
    }
    return "accent";
  }


  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.registerIcons(iconRegistry, sanitizer);
  }

  private registerIcons(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    const icons = [
      { name: 'angular', path: '/assets/svgs/angular.svg' },
      { name: 'java', path: '/assets/svgs/java.svg' },
      { name: 'python', path: '/assets/svgs/python.svg' },
      { name: 'javascript', path: '/assets/svgs/javascript.svg' },
      { name: 'jira', path: '/assets/svgs/jira.svg' },
      { name: 'gitkraken', path: '/assets/svgs/gitkraken.svg' },
      { name: 'jet', path: '/assets/svgs/jet.svg' },
      { name: 'html', path: '/assets/svgs/html.svg' },
      { name: 'robot', path: '/assets/svgs/robot.svg' },
      { name: 'leaf', path: '/assets/svgs/leaf.svg' },
      { name: 'docker', path: '/assets/svgs/docker.svg' },
      { name: 'kubernetes', path: '/assets/svgs/kubernetes.svg' },
      { name: 'db', path: '/assets/svgs/db.svg' },
      { name: 'hiking', path: '/assets/svgs/hiking.svg' },
      { name: 'plane', path: '/assets/svgs/plane.svg' },
      { name: 'car', path: '/assets/svgs/car.svg' },
      { name: 'dragon', path: '/assets/svgs/dragon.svg' },
      { name: 'gamepad', path: '/assets/svgs/gamepad.svg' },
      { name: 'mountain', path: '/assets/svgs/mountain.svg' },
      { name: 'book', path: '/assets/svgs/book.svg' },
      { name: 'basketball', path: '/assets/svgs/basketball.svg' },
      { name: 'cucumber', path: '/assets/svgs/cucumber.svg' },
      { name: 'mockito', path: '/assets/svgs/mockito.svg' },
      { name: 'junit', path: '/assets/svgs/junit.svg' },
      { name: 'cube', path: '/assets/svgs/cube.svg' },
      { name: 'jenkins', path: '/assets/svgs/jenkins.svg' }
    ];

    icons.forEach(icon => {
      try {
        iconRegistry.addSvgIcon(
          icon.name,
          sanitizer.bypassSecurityTrustResourceUrl(icon.path)
        );
      } catch (error) {
        console.warn(`Failed to register icon: ${icon.name}`, error);
      }
    });
  }

  ngOnInit(): void {
    switch(this.rating) {
      case 0: {
        this.chipColor = undefined;
        break;
      }
      case 1: {
        this.chipColor = 'accent';
        break;
      }
      case 2: {
        this.chipColor = 'warn';
        break;
      }
      case 3: {
        this.chipColor = 'primary';
        break;
      }
      default: {
        this.chipColor = undefined;
        break;
      }
    }
  }

}
