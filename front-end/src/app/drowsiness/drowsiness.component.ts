import { Component, OnInit } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { StateService } from '../Services/state.service';

@Component({
  selector: 'app-drowsiness',
  templateUrl: './drowsiness.component.html',
  styleUrls: ['./drowsiness.component.scss']
})
export class DrowsinessComponent implements OnInit {

  constructor(public rs: RestService, public state: StateService) { }

  ngOnInit(): void {
    this.chartDatasets = [
      { data: [0]},
    ];
    let self = this;
    setInterval(function(){ 
      self.updateData();
     }, 1000);
  }

  public chartDatasets: Array<any> = []

  public chartType: string = 'bar';

  public updateData() {
    let data: Array<number> = []
    for (var i = 0; i <= this.state.state; i++) {
      data.push(Number(this.rs.patientData[i]['drowsiness']))
    };

    this.chartDatasets = [
      { data: data},
    ];
  }

  public chartLabels: Array<any> = [""]

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235)',
      borderWidth: 2,
    },
  ];

  public chartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
          max: 10
      }
      }]
    }
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}

