import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { KbarAngularModule } from 'kbar-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, KbarAngularModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
