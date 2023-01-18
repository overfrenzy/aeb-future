import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aeb-future';

  constructor(private http: HttpClient){

  }

  onSend(applicants: {name: string, birthday: Date, year: string, group: string, phone: string, email: string, python: Boolean, csharp: Boolean, cplusplus: boolean, php: Boolean, html: Boolean, js: Boolean, java: Boolean, sql: Boolean, scrum: Boolean, agile: Boolean, kanban: Boolean, university: Boolean, courses: Boolean, conferences: Boolean, diploma: String, itwork: String, none: Boolean, portfolio: String}){
    console.log(applicants);
    const headers = new HttpHeaders({'myHeader': 'vasilev'});
    this.http.post('endpoint/applicants.json', applicants, {headers: headers}).subscribe((res) => {
      console.log(res);
    });
  }
}
