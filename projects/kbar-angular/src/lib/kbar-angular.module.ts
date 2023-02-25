import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PositionerComponent } from './components/positioner/positioner.component';
import { SearchComponent } from './components/search/search.component';
import { KbarComponent } from './components/kbar/kbar.component';
import { ResultsComponent } from './components/results/results.component';
import { OverlayComponent } from './components/overlay/overlay.component';

import { KbarAngularService } from './kbar-angular.service';

@NgModule({
  declarations: [
    KbarComponent,
    OverlayComponent,
    PositionerComponent,
    SearchComponent,
    ResultsComponent,
  ],
  imports: [BrowserModule],
  providers: [KbarAngularService],
  exports: [
    KbarComponent,
    OverlayComponent,
    PositionerComponent,
    SearchComponent,
    ResultsComponent,
  ],
})
export class KbarAngularModule {}
