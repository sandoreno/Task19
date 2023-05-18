import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { TestsPageComponent } from './components/tests-page/tests-page.component';
import { CatalogPageComponent } from './components/catalog-page/catalog-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    TestsPageComponent,
    CatalogPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
