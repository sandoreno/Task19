import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogPageComponent } from './components/catalog-page/catalog-page.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { TestsPageComponent } from './components/tests-page/tests-page.component';

const routes: Routes = [
  {path : 'catalog', component : CatalogPageComponent},
  {path : 'dashboard', component : StartPageComponent},
  {path : 'tests', component : TestsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
