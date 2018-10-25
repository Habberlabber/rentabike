import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BikeCardComponent } from './bike-card/bike-card.component';
import { DemoData } from './demo-data';
import { AvailabilityComponent } from './availability/availability.component';

@NgModule({
  declarations: [
    AppComponent,
    BikeCardComponent,
    AvailabilityComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DemoData],
  bootstrap: [AppComponent]
})
export class AppModule { }
