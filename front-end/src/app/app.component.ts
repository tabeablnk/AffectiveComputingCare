import { Component, OnInit} from '@angular/core';
import { Patient } from './patienten-list/patient';
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
    this.loadPatientList();
      // this.rs.getPatientData()
      // .subscribe
      //   (
      //     (response) => 
      //     {
      //       this.rs.setPatientData(response[0]["data"]);
      //       this.loadPatientList()
      //     },
      //     (error) =>
      //     {
      //       console.log("No Data Found" + error);
      //     }

      //   )
  }

  public loadPatientList() {
    this.rs.getPatientList()
      .subscribe
        (
          (response) => 
          {
            this.rs.setPatientList(response[0]);
            this.dataLoaded = true;
          },
          (error) =>
          {
            console.log("No Data Found" + error);
          }

        )
  }

  


}

