import { NgModule } from '@angular/core';
import { KbarAngularComponent } from './kbar-angular.component';
import { OverlayComponent } from './overlay/overlay.component';

@NgModule({
  declarations: [KbarAngularComponent, OverlayComponent],
  imports: [],
  exports: [KbarAngularComponent, OverlayComponent],
})
export class KbarAngularModule {}
