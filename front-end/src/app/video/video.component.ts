import { Component, ElementRef, HostListener, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.scss"],
})
export class VideoComponent implements OnInit {

  @ViewChild('video') videoplayer!: ElementRef;

  constructor() {}


  ngOnInit(): void {}

  @HostListener("window:keyup", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode == 32) {
      this.videoplayer.nativeElement.play();
    }
  }
}
