import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rab-bike-card',
  templateUrl: './bike-card.component.html',
  styleUrls: ['./bike-card.component.scss']
})
export class BikeCardComponent implements OnInit {

  /*
    @Input defines a variable that will be updated during changedetection.
    This allows to pass variables from parent components, that will always stay up to date. 
    The value is set in the markup as [bike]=""
  */ 
  @Input() bike;
  showConfirmation:boolean;

  constructor() { }

  ngOnInit() {
  }

  bookBike(){
    this.bike.availableCount--;
    this.showConfirmation = true;
    setTimeout(()=>{ this.showConfirmation = false }, 4000);
  }

}
