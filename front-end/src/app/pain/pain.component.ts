import { Component, OnInit } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { StateService } from '../Services/state.service';

@Component({
  selector: 'app-pain',
  templateUrl: './pain.component.html',
  styleUrls: ['./pain.component.scss']
})
export class PainComponent implements OnInit {

  constructor(public state: StateService, public rs: RestService) { }

  ngOnInit(): void {
  }

  public chartType: string = 'polarArea';

  public chartLabels: Array<any> = ['Red'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(219, 0, 0, 0.1)',
      ],
      hoverBackgroundColor: [
        'rgba(219, 0, 0, 0.2)',
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true,
    scale: {
      ticks: {
          min: 0,
          max: 100
      }
    }
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
