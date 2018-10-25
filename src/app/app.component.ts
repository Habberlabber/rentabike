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

  // When the AppComponent is constructed we add the DemoData Class.
  // This is where we get the Array containing the Bike Objects.
  // The bikeList is then updated with the data form the DemoData class.
  constructor(private data:DemoData){
    this.bikesList = data.bikesList;
  }

}
