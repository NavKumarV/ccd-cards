import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonConsumptionModule } from '@project-sunbird/common-consumption-v8';
import { RandomColorMapPipe } from '../pipes/random-color-map.pipe';
import { ThemeInputsSelectorPipe } from '../pipes/theme-inputs-selector.pipe';
import { AgGridModule } from 'ag-grid-angular';
import { AppCarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeInputsSelectorPipe,
    RandomColorMapPipe,
    AppCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonConsumptionModule,
    AgGridModule.withComponents(null)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
