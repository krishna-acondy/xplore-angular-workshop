import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, fromEvent } from 'rxjs';
import { map, shareReplay, concatMap, debounceTime, exhaustMap } from 'rxjs/operators';
import { Course } from '../course';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements AfterViewInit {

  courses$: Observable<Course[]>;
  @ViewChild('button') button: ElementRef;

  constructor(httpClient: HttpClient) {
    this.courses$ = httpClient.get('/api/courses')
      .pipe(
        map((response: any) => response.payload)
      );
  }

  ngAfterViewInit() {
    fromEvent(this.button.nativeElement, 'click')
      .pipe(
        concatMap(() => this.courses$)
      )
      .subscribe(console.log);
  }
}
