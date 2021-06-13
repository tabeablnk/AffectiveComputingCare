import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatientenListComponent } from './patienten-list/patienten-list.component';
import { TestPatientComponent } from './test-patient/test-patient.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: TestPatientComponent},
  {path: 'patientenListe', component: PatientenListComponent},
  {path: 'patient', component: TestPatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
