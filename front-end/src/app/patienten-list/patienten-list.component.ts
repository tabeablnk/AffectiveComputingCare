import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../Services/rest.service';
import { StateService } from '../Services/state.service';
import { Patient } from './patient';
import { PATIENT } from './patient-mock';

//export interface PeriodicElement {
  //position: number;
  //name: string;
  //vorname: string;
  //station: number;
  //zimmer: number;
  //pfleger: string;
//}
//
//const ELEMENT_DATA: PeriodicElement[] = [
 //{position: 1, name: 'Hydrogen', vorname: "Helga", station: 2, zimmer: 14, pfleger: 'Ht'},
 //{position: 2, name: 'Helium', vorname: "Tom", station: 1, zimmer: 3, pfleger: 'Li'},
 //{position: 3, name: 'Lithium', vorname: "Gerd", station: 3, zimmer: 23, pfleger: 'Ph'},
 //{position: 4, name: 'Beryllium', vorname: "Selena", station: 5, zimmer: 12, pfleger: 'Ds'},
 //{position: 5, name: 'Boron', vorname: "Tina", station: 3, zimmer: 27, pfleger: 'Ph'},
 //{position: 6, name: 'Carbon', vorname: "Karin", station: 3, zimmer: 10, pfleger: 'Ph'},
 //{position: 7, name: 'Nitrogen', vorname: "Lisa", station: 2, zimmer: 24, pfleger: 'Ht'},
 //{position: 8, name: 'Oxygen', vorname: "Fred", station: 1, zimmer: 5, pfleger: 'Li'},
 //{position: 9, name: 'Fluorine', vorname: "Sophia", station: 4, zimmer: 7, pfleger: 'Se'},
 //{position: 10, name: 'Neon', vorname: "Elena", station: 4, zimmer: 19, pfleger: 'Se'},
//];

@Component({
  selector: 'app-patienten-list',
  templateUrl: './patienten-list.component.html',
  styleUrls: ['./patienten-list.component.scss']
})

export class PatientenListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'vorname', 'station', 'zimmer', 'pfleger'];
  dataSource:any;

  patienten = PATIENT;
  selectedPatient:any;

  constructor(private rs : RestService, public state: StateService, private router: Router) { }

  ngOnInit(): void {
    this.rs.getPatientList()
      .subscribe
        (
          (response) => 
          {
            this.dataSource = response;
            //this.dataLoaded = true;
          }
        )
  }

  onSelect(patient:any) {
    console.log(patient);
    this.router.navigate(['/patient', patient.id]);
  }

}
