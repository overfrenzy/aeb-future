import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { MyDataService } from 'src/app/services/my-data.service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent implements OnInit {
  myData: any;
  myData$: any;
  constructor(private myDataService: MyDataService) {}

  ngOnInit(): void{
    this.myData$ = this.myDataService
    .getData()
    .pipe(tap((data) => (this.myData = data)));
  }
}
