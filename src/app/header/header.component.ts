import {Component, OnInit} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {Router} from "@angular/router";
import {Location} from "@angular/common";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: false
})
export class HeaderComponent implements OnInit {

  links = ['Profile', 'Skills', 'Experience', 'Certificates'];
  background: ThemePalette = undefined;

  constructor(private router: Router, private location: Location) {
  }


  ngOnInit(): void {
  }


  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }

  navTo(link: string) {
    this.router.navigate([link]);
  }

}
