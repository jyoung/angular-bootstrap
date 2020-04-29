import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SideNavComponent } from './side-nav/side-nav.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';



@NgModule({
  declarations: [
    SideNavComponent,
    PageWrapperComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    SideNavComponent,
    PageWrapperComponent
  ]
})
export class SharedModule { }
