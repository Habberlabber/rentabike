import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rab-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent implements OnInit {
  
  class:string;
  _availableCount:number;

  @Input() 
  set availableCount(availableCount:number) {
    this._availableCount = availableCount;
    this.setClass(availableCount);
  }

  get availableCount():number {
    return this._availableCount;
  }

  private setClass(availableCount:number) {
    if(availableCount == 0) {
      this.class = 'State--red';
    } else if(availableCount > 2) {
      this.class = 'State--green';
    } else {
      this.class = '';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
