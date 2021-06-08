import { Component, OnChanges, OnInit } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { StateService } from '../Services/state.service';

@Component({
  selector: 'app-emotions',
  templateUrl: './emotions.component.html',
  styleUrls: ['./emotions.component.scss']
})
export class EmotionsComponent implements OnInit {

  constructor(public rs: RestService, public state: StateService) { }

  patientData: any;

  ngOnInit() {}


  public chartType: string = 'bar';

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
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
          max: 1
      }
      }]
    }
  };

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
