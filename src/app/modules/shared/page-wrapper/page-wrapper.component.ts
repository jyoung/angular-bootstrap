import { Component, Input, NgZone } from '@angular/core';

@Component({
  selector: 'app-page-wrapper',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.scss']
})
export class PageWrapperComponent {
  @Input() pageTitle: string;

  sidebarCollapsed = true;
  isLargeScreenOrLess: boolean;

  constructor(ngZone: NgZone) {
    const largeScreenQL = matchMedia('(max-width: 1199.98px)');
    this.isLargeScreenOrLess = largeScreenQL.matches;
    // tslint:disable-next-line:deprecation
    largeScreenQL.addListener((event) => ngZone.run(() => this.isLargeScreenOrLess = event.matches));
  }
}
