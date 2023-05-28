import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { TestsPageComponent } from './components/tests-page/tests-page.component';
import { CatalogPageComponent } from './components/catalog-page/catalog-page.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { CustomFilterPipe } from './modules/custom_filter/custom-filter-pipe.pipe';
import { Comp_Dir } from './directive/comp.directive'
import { HttpClientModule } from '@angular/common/http';
import { RegistryModule } from './shared/modals/registry-modal/registry.module';
import { TabsComponent } from './shared/components/tabs/tabs.component';
import { TabComponent } from './shared/components/tabs/tab/tab.component';
import {PreloaderComponent} from './shared/components/preloader/preloader.component'

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    TestsPageComponent,
    CatalogPageComponent,
    CustomFilterPipe,
    Comp_Dir,
    TabsComponent,
    TabComponent,
    PreloaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
