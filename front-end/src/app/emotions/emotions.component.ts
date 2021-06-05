import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emotions',
  templateUrl: './emotions.component.html',
  styleUrls: ['./emotions.component.scss']
})
export class EmotionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public chartType: string = 'horizontalBar';

  public chartDatasets: Array<any> = [
    { data: [85, 59, 60]}
  ];

  public chartLabels: Array<any> = ['Traurig', 'Glücklich', 'Neutral'];

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
