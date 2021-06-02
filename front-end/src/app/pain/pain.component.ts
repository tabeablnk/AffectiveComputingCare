import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pain',
  templateUrl: './pain.component.html',
  styleUrls: ['./pain.component.scss']
})
export class PainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public chartType: string = 'polarArea';

  public chartDatasets: Array<any> = [
    { data: [65]}
  ];

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
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
