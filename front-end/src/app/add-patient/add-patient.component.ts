import { Component, OnInit } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { StateService } from '../Services/state.service';


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

  constructor(private rs : RestService, public state: StateService) { }

  dataSource:any;


  ngOnInit(): void {
    this.dataSource = this.rs.patientList;
    console.log(this.dataSource);
  }

}
