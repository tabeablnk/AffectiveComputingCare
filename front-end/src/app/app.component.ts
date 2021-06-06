import { Component, OnInit} from '@angular/core';
import { RestService } from './Services/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'front-end';

  constructor(private rs : RestService){}

  ngOnInit()
  { 
     this.rs.getPatientData();
  }
}

