import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SummaryComponent } from './summary/summary.component';
import { VideoComponent } from './video/video.component';
import { PainComponent } from './pain/pain.component';
import { DrowsinessComponent } from './drowsiness/drowsiness.component';
import { EmotionsComponent } from './emotions/emotions.component';
import { PatientenListComponent } from './patienten-list/patienten-list.component';
import { HomeComponent } from './home/home.component';
import { TestPatientComponent } from './test-patient/test-patient.component';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './Services/rest.service';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    VideoComponent,
    PainComponent,
    DrowsinessComponent,
    EmotionsComponent,
    PatientenListComponent,
    HomeComponent,
    TestPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
