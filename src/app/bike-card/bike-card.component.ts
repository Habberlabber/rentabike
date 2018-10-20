import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rab-bike-card',
  templateUrl: './bike-card.component.html',
  styleUrls: ['./bike-card.component.scss']
})
export class BikeCardComponent implements OnInit {

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
