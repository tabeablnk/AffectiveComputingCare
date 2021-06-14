import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../Services/rest.service';
import { StateService } from '../Services/state.service';
import { Patient } from './patient';
import { PATIENT } from './patient-mock';

@Component({
  selector: 'app-patienten-list',
  templateUrl: './patienten-list.component.html',
  styleUrls: ['./patienten-list.component.scss']
})

export class PatientenListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'vorname', 'station', 'zimmer', 'pfleger'];
  dataSource:any;

  patients = PATIENT;
  selectedPatient:any;

  constructor(private rs : RestService, public state: StateService, private router: Router) { }

  ngOnInit(): void {
    this.patients = this.rs.patientList;
    console.log(this.patients);
  }

  onSelect(patient:Patient) {
    console.log(patient);
    this.state.setCurrentPatient(patient.id);
    this.router.navigateByUrl('patient');
  }

}
