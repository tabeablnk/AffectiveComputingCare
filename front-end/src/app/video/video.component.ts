import { Component, ElementRef, HostListener, OnInit, ViewChild, Input } from "@angular/core";
import { StateService } from "../Services/state.service";
import { Patient } from '../patienten-list/patient';

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.scss"],
})
export class VideoComponent implements OnInit {

  @ViewChild('video') videoplayer!: ElementRef;

  patient:any;

  constructor(public state: StateService) {}


  ngOnInit(): void {
  }

  @HostListener("window:keyup", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode == 32) {
      this.videoplayer.nativeElement.play();
    }
  }


  setCurrentTime(data: any) {
    console.log(Math.round(data.target.currentTime));
     this.state.setState(Math.round(data.target.currentTime));
  }
}
