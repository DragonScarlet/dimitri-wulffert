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
  @Input() imagePath: string;
  @Input() imageAlt: string;
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
      { name: 'jenkins', path: '/assets/svgs/jenkins.svg' },
      
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

  getChipColor() {
    // Return semi-transparent glass colors for CSS custom property (Catppuccin Macchiato)
    // If showRating is true, opacity is based on rating (0.2 to 0.6), otherwise normal (0.25)
    let opacity;
    if (this.showRating && this.rating !== undefined) {
      // Map rating 0-3 to opacity 0.2-0.6
      opacity = 0.2 + (this.rating * 0.15);
    } else {
      opacity = 0.25;
    }
    const defaultOpacity = this.showRating && this.rating !== undefined ? 0.15 + (this.rating * 0.125) : 0.2;
    
    switch(this.color) {
      case 'green':
        return `rgba(166, 227, 161, ${opacity})`; // Macchiato green
      case 'blue':
        return `rgba(137, 180, 250, ${opacity})`; // Macchiato blue
      case 'red':
        return `rgba(243, 139, 168, ${opacity})`; // Macchiato red
      case 'purple':
        return `rgba(203, 166, 247, ${opacity})`; // Macchiato mauve/purple
      case 'yellow':
        return `rgba(249, 226, 175, ${opacity})`; // Macchiato yellow
      case 'orange':
        return `rgba(250, 179, 135, ${opacity})`; // Macchiato peach/orange
      default:
        return `rgba(110, 115, 141, ${defaultOpacity})`; // Macchiato Overlay 0
    }
  }

  getColorClass() {
    // Return the appropriate color class if color is provided, otherwise return empty string
    switch(this.color) {
      case 'green':
        return 'green';
      case 'blue':
        return 'blue';
      case 'red':
        return 'red';
      case 'purple':
        return 'purple';
      case 'yellow':
        return 'yellow';
      case 'orange':
        return 'orange';
      default:
        return '';
    }
  }

}
