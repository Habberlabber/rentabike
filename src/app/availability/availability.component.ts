import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rab-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent implements OnInit {
  
  class:string;
  /* 
    _availableCount is defined to contain the number of available bikes.
    we name it with _ since we are not going to be callign it directly
    but instead we are updating and retrieving the value usign getter and setter 
  */
  private _availableCount:number;

  /*
    Input is again used to bind the an attribute on the component html

    Since we want to change the value of the class variable based on
    the number of available bikes, we use a setter to "intercept" when the value is updated.
    This allows us to run a function (or any other code), and the update our _availableCount variable.
  */
  @Input() 
  set availableCount(availableCount:number) {
    this._availableCount = availableCount;
    this.setClass(availableCount);
  }

  /*
    The getter is here used to get the value of the _availableCount variable from the html template.
  */
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
