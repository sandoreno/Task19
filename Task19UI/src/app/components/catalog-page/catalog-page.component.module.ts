import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { CatalogPageComponent } from './catalog-page.component';
import { CatalogPageRoutingModule } from './catalog-page.component.routing-module';

@NgModule({
  declarations: [
    //CatalogPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CatalogPageRoutingModule
  ]
})
export class CatalogPageModule { }
