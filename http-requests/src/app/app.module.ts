import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FetchComponent } from './fetch/fetch.component';
import { HttpClientComponent } from './http-client/http-client.component';

export const routes: Route[] = [
  {
    path: 'fetch',
    component: FetchComponent
  },
  {
    path: 'http-client',
    component: HttpClientComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FetchComponent,
    HttpClientComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
