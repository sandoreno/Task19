import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogPageComponent } from './catalog-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CatalogPageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogPageRoutingModule { }
