import { Component } from '@angular/core';
import { DemoData } from './demo-data';

@Component({
  selector: 'rab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rentabike';
  bikesList;
  constructor(private data:DemoData){
    this.bikesList = data.bikesList;
  }

}
