import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    standalone: false
})
export class AboutComponent implements OnInit {
  isProfileHovered = false; // Track hover state for profile image swapping

  constructor() { }

  ngOnInit(): void {
  }

  onProfileHover(hovering: boolean): void {
    this.isProfileHovered = hovering;
  }

}
