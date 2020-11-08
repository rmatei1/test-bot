import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';

@Component({
  selector: 'nx-workshop-day2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bg-hoard';
  serverResponse = 'Loading...'

  constructor(private http: HttpClient) {
    this.http.get(`${environment.apiUrl}/api`).subscribe((res: {message: string}) => {
      this.serverResponse = res.message;
    })
  }
}
