import { ɵNullViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Patient } from '../patienten-list/patient';
import { RestService } from '../Services/rest.service';
import { StateService } from '../Services/state.service';


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

  constructor(private rs : RestService, public state: StateService, private dialogRef: MatDialogRef<AddPatientComponent>) { }

  dataSource:any;
  video!: any;
  video_kal!: any;
  loading: boolean = false;
  use_existing_files: boolean = false;


  ngOnInit(): void {
    this.dataSource = this.rs.patientList;
    console.log(this.dataSource);
  }

  onVideoSelected(event: any) : void {
    this.video = <File>event.target.files[0];
  }

  onVideoKalSelected(event: any): void {
    this.video_kal = <File>event.target.files[0];
  }

  addPatient(): void {
    this.loading = true;
    let patientID = this.rs.patientList.length;
    let newPatient: Patient = {
      id: patientID,
      name: this.dataSource.name,
      vorname: this.dataSource.vorname,
      station: this.dataSource.station,
      zimmer: this.dataSource.zimmer,
      pfleger: this.dataSource.pfleger,
      videoPath: "../../assets/patientVideos/" + patientID + "_" + "video.mp4" 

    }

    const formData = new FormData();

    formData.append('video', this.video, 'video.mp4')
    formData.append('video_kal', this.video_kal, 'video_kal.mp4')
    formData.append('patientID', patientID.toString())
    
    //Post Videos
    this.rs.uploadVideo(formData)
    .subscribe
      (
        (response) => 
        {
          console.log("Videos are uploaded!")
          this.rs.addPatient(newPatient);  
          this.rs.generatePatientData(patientID, this.use_existing_files)
          .subscribe
            (
              (response) => 
              {
                console.log("Data ist generaed") 
                this.loading = false; 
                this.dialogRef.close();
              },
              (error) =>
              {
                console.log("Error while uploading the videos" + error);
              }
      
            ) 
        },
        (error) =>
        {
          console.log("Error while uploading the videos" + error);
        }

      ) 
  }

}
