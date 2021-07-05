import { Injectable } from '@angular/core';
import { Patient } from '../patienten-list/patient';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  //defines the second we are in the video
  public state: number = 0;

  //defines the current selected patient
  private currentPatient: any;

  constructor(private rs: RestService) { 
    this.currentPatient = this.rs.patientList[0];
  }

  public setState(state: number) {
    this.state = state;
  }

  public getState() {
    return this.state;
  }

  public setCurrentPatient(patientId: number) {
    this.currentPatient = this.rs.patientList.filter(patient => patient.id == patientId)[0];
  }

  public getCurrentPatient(): Patient {
    return this.currentPatient;
  }

  

}
