import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatientenListComponent } from './patienten-list/patienten-list.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'patientenList', component: PatientenListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
