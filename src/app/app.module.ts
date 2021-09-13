import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
// import { RatingComponent } from './microservices/rating/rating.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    // RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbPaginationModule,
    NgbAlertModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  exports:[
    // RatingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
