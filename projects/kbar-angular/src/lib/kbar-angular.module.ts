import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayComponent } from './overlay/overlay.component';
import { PositionerComponent } from './positioner/positioner.component';
import { SearchComponent } from './search/search.component';
import { KbarComponent } from './kbar/kbar.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    KbarComponent,
    OverlayComponent,
    PositionerComponent,
    SearchComponent,
    KbarComponent,
    ResultsComponent,
  ],
  imports: [BrowserModule],
  exports: [KbarComponent],
})
export class KbarAngularModule {}
