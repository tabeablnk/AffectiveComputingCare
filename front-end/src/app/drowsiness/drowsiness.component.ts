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

    this.chartDatasets = [
      { data: data},
    ];
  }

  public chartLabels: Array<any> = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '90', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', , '111', '112', '113', '114', '115', '116', '117', '118', '119',];

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
          max: 10
      }
      }]
    }
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}

