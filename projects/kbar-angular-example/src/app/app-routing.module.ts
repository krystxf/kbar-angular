import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DocsComponent } from './pages/docs/docs';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'docs',
    component: DocsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
