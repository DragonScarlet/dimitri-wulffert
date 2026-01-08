import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import {fromEvent, Subject, takeUntil} from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  title = 'cv-nex2';
  destroyed = new Subject<void>();
  currentScreenSize: string;
  destroy = new Subject();
  destroy$ = this.destroy.asObservable();
  highblur = false;
  mediumblur = false;
  lightblur = false;
  ultrablur = false;

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(private breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
          }
        }
      });

    fromEvent(window, 'scroll').pipe(takeUntil(this.destroy$))
      .subscribe((e: Event) => {
        this.lightblur = window.scrollY > 50;
        this.mediumblur = window.scrollY > 100;
        this.highblur = window.scrollY > 150;
        this.ultrablur = window.scrollY > 200;
      });

  }

  isBigScreen() {
    return this.currentScreenSize === 'XLarge';
  }

}
