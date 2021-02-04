import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonInfoComponent } from './person-info/person-info.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CounterButtonPageComponent } from './counter-button-page/counter-button-page.component';
import { PersonInfoPageComponent } from './person-info-page/person-info-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonInfoComponent,
    CounterButtonComponent,
    HomePageComponent,
    CounterButtonPageComponent,
    PersonInfoPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
