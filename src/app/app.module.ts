import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './modules/layout/layout.module';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    CardModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    // { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
