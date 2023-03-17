import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { KbarModule, KbarAngularService } from 'kbar-angular';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DocsComponent as DocsComponent } from './pages/docs/docs';
import { CodeComponent } from './components/code-snippet/code-snippet.component';
import { ContentMenuComponent } from './components/content-menu/content-menu.component';
import { CodeInlineComponent } from './components/code-inline/code-inline.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DocsComponent,
    CodeComponent,
    ContentMenuComponent,
    CodeInlineComponent,
  ],
  imports: [BrowserModule, KbarModule, AppRoutingModule],
  providers: [KbarAngularService],
  bootstrap: [AppComponent],
})
export class AppModule {}
