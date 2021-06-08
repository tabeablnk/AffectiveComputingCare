import { Component, OnInit} from '@angular/core';
import { RestService } from './Services/rest.service';
import { StateService } from './Services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'front-end';
  dataLoaded: boolean = false;

  constructor(private rs : RestService, private state: StateService){}

  ngOnInit()
  {
      this.rs.getPatientData()
      .subscribe
        (
          (response) => 
          {
            this.rs.setPatientData(response[0]["data"]);
            this.dataLoaded = true;
          },
          (error) =>
          {
            console.log("No Data Found" + error);
          }

        )
        let self = this;
      setInterval(function(){ 
        self.state.setState(self.state.getState()+1);
        console.log(self.state.getState())
       }, 3000);
  }

  


}

