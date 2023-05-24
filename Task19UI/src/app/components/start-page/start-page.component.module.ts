import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { StartPageComponent } from './start-page.component';
import { StartPageRoutingModule } from './start-page.component.routing-module'

@NgModule({
  declarations: [
    //StartPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StartPageRoutingModule
  ]
})
export class StartPageModule {}
