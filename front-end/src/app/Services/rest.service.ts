import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit(){
  }

  moodUrl : string = "http://127.0.0.1:5000/getMood/";

  getMoodData()
  {
    return this.http.get<any>(this.moodUrl);
  }
}
