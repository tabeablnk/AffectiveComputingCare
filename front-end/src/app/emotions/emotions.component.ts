import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { RestService } from '../Services/rest.service';

@Component({
  selector: 'app-emotions',
  templateUrl: './emotions.component.html',
  styleUrls: ['./emotions.component.scss']
})
export class EmotionsComponent implements OnInit {

  sad = 0;
  neutral = 0;
  happy = 0;

  constructor(public rs: RestService) { }

  patientData: any;

  ngOnInit(){
    this.rs.getPatientData()
    .subscribe
      (
        (response) => 
        {
          this.patientData = response[0]["data"][0]["emotions"][0];
          console.log("happy: " + this.patientData["happy"]);
          console.log("sad: " + this.patientData["sad"]);
          console.log("neutral: " + this.patientData["neutral"]);
          this.sad = this.patientData["sad"];
          this.neutral = this.patientData["neutral"];
          this.happy = this.patientData["happy"];
        },
        (error) =>
        {
          console.log("No Data Found" + error);
        }

      );
  }

  public chartType: string = 'bar';

  public chartDatasets: Array<any> = [
    { data: [this.sad, this.happy, this.neutral]}
  ];

  public chartLabels: Array<any> = ['Traurig', 'Neutral', 'Happy'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],

      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
