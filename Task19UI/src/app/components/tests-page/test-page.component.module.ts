import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { TestsPageComponent } from './tests-page.component';
import { TestsPageRoutingModule } from './tests-page.component.routing-module';

@NgModule({
  declarations: [
    //TestsPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TestsPageRoutingModule
  ]
})
export class StartPageModule { }
