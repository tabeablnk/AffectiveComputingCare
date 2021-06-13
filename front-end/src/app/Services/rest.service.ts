import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../patienten-list/patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  public patientData: any;
  public patientList: Patient[] = [];

  patientDataUrl : string = "http://127.0.0.1:5000/getPatientData/";
  patientListUrl : string = "http://127.0.0.1:5000/getPatientenListe/";

  constructor(private http : HttpClient) { }

  getPatientData() {
    return this.http.get<any>(this.patientDataUrl)
  }

  public setPatientData (patientData: any) {
    this.patientData = patientData;
  } 

  getPatientList() {
    return this.http.get<any>(this.patientListUrl)
  }

  public setPatientList (patientList: Patient[]) {
    this.patientList = patientList;
  }


}
