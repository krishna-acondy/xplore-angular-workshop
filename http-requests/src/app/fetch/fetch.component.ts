import { Component, OnInit } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.scss']
})
export class FetchComponent implements OnInit {

  courses: Course[] = [];

  constructor() { }

  ngOnInit() {
    fetch('/api/courses')
      .then(response => response.json())
      .then(json => json.payload)
      .then(payload => this.courses = payload);
  }

}
