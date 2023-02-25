import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayComponent } from './overlay/overlay.component';
import { PositionerComponent } from './positioner/positioner.component';
import { SearchComponent } from './search/search.component';
import { KbarComponent } from './kbar/kbar.component';
import { ResultsComponent } from './results/results.component';
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
