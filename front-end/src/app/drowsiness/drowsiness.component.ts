import { Component, OnInit } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { StateService } from '../Services/state.service';

@Component({
  selector: 'app-drowsiness',
  templateUrl: './drowsiness.component.html',
  styleUrls: ['./drowsiness.component.scss']
})
export class DrowsinessComponent implements OnInit {

  constructor(private rs: RestService, private state: StateService) { }

  ngOnInit(): void {
  }

  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: [0,0,0,0,0,0,0,10,10,15,20,65, 59,0,5,10,30,55, 80, 81,100,0,0,0,0]},
  ];

  public chartLabels: Array<any> = ['00', '01', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgb(70, 191, 189, .2)',
      borderColor: 'rgba(70, 191, 189)',
      borderWidth: 2,
    },
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}

