import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  //defines the second we are in the video
  public state: number = 0;

  constructor(private rs: RestService) { }

  public setState(state: number) {
    this.state = state;
  }

  public getState() {
    return this.state;
  }

}