import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { KbarModule, KbarAngularService } from 'kbar-angular';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { CodeComponent } from './components/code/code.component';
import { ContentMenuComponent } from './components/content-menu/content-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DocumentationComponent,
    CodeComponent,
    ContentMenuComponent,
  ],
  imports: [BrowserModule, KbarModule, AppRoutingModule],
  providers: [KbarAngularService],
  bootstrap: [AppComponent],
})
export class AppModule {}
