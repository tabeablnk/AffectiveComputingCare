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
    this.chartDatasets = [
      { data: [0]},
    ];
    let self = this;
    setInterval(function(){ 
      self.updateData();
     }, 1000);
  }

  public chartDatasets: Array<any> = []

  public chartType: string = 'line';

  public updateData() {
    let data: Array<number> = []
    for (var i = 0; i <= this.state.state; i++) {
      data.push(Number(this.rs.patientData[i]['drowsiness']))
    };
    console.log(data);

    this.chartDatasets = [
      { data: data},
    ];
  }

  public chartLabels: Array<any> = ['00', '01', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50' ];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgb(70, 191, 189, .2)',
      borderColor: 'rgba(70, 191, 189)',
      borderWidth: 2,
    },
  ];

  public chartOptions: any = {
    responsive: true,
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

