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

  getPatientData(patientId: number) {
    return this.http.get<any>(this.patientDataUrl + '?patientID=' + patientId)
  }

  public setPatientData (patientData: any) {
    this.patientData = patientData;
  } 

  getPatientList() {
    return this.http.get<any>(this.patientListUrl)
  }

  addPatient(newPatient: Patient) {
    this.patientList.push(newPatient);
  }

  public setPatientList (patientList: Patient[]) {
    this.patientList = patientList;
  }

  uploadVideo(formData: FormData) {
    return this.http.post('http://127.0.0.1:5000/uploadVideo/', formData)
  }

  generatePatientData(patientId: number) {
    return this.http.get("http://127.0.0.1:5000/generatePatientData/?patientID=" + patientId)
  } 

}
