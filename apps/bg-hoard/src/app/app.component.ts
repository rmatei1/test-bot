import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'nx-workshop-day2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bg-hoard';

  constructor(private http: HttpClient) {
    this.http.get('/api').subscribe(res => {
      console.log("RES: ", res)
    })
  }
}
