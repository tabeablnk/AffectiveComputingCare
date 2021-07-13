import { Component, OnInit } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { StateService } from '../Services/state.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(public rs: RestService, public state: StateService) { }

  patientData: any;

  ngOnInit(): void {}

  public chartType: string = 'doughnut';

  public chartLabels: Array<any> = ['Schmerz', 'Müdigkeit', 'Psych. Bedürfnisse'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', 'rgba(54, 162, 235)', '#FDB45C'],
      hoverBackgroundColor: ['#FF5A5E', 'rgba(70, 138, 240)', '#FFC870'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
