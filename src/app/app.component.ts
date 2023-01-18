import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aeb-future';
  SelectedExperience: string = 'Нет';
  changeAnswer(Experience: string) {
    this.SelectedExperience = Experience;
  }
}
