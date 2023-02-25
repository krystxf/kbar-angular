import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { KbarAngularModule, KbarAngularService } from 'kbar-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, KbarAngularModule],
  providers: [KbarAngularService],
  bootstrap: [AppComponent],
})
export class AppModule {}
