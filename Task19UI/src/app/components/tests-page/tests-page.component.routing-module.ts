import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestsPageComponent } from './tests-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TestsPageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestsPageRoutingModule { }
