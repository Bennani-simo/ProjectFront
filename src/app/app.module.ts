import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; // 
import {MatButtonModule} from '@angular/material/button'; // button
import {MatCardModule} from '@angular/material/card'; //fenetre
import {MatCheckboxModule} from '@angular/material/checkbox'; //checkbox remember me

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 

