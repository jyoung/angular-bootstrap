import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export const componentsList = [
  'Accordion', 'Alert', 'Buttons', 'Carousel', 'Collapse', 'Datepicker', 'Dropdown', 'Modal', 'Nav', 'Pagination',
  'Popover', 'Progressbar', 'Rating', 'Table', 'Tabset', 'Timepicker', 'Toast', 'Tooltip', 'Typeahead'
];

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  components = componentsList;

  constructor(private router: Router) { }

  isActive(currentRoute: any[], exact = true): boolean {
    return this.router.isActive(this.router.createUrlTree(currentRoute), exact);
  }

  ngOnInit() {
  }

}
