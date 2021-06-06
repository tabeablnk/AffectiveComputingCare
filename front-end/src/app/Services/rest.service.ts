import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  public patientData: any;
  patientDataUrl : string = "http://127.0.0.1:5000/getPatientData/";

  constructor(private http : HttpClient) { }

  getPatientData() {
    this.http.get<any>(this.patientDataUrl)
    .subscribe
      (
        (response) => 
        {
          console.log(response)
          this.patientData = response[0]["data"];

        },
        (error) =>
        {
          console.log("No Data Found" + error);
        }

      )
  }

}
