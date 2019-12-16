/* import { Component, OnInit } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';
import { timeout } from 'q';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login= 'Bret';    /*  login: Bret; */
  /*mdp: string;
  logged = false;
  loading = false;



  constructor(private http: HttpClient) { }

  ngOnInit() {
    
 
  }

  connexion() {
    this.loading = true;
    
    this.http.get('https://jsonplaceholder.typicode.com/users?username=' + this.login)
    .subscribe((value: any []) =>{
        // traitement ok
      console.log('get' + this.login ,value.length);
      if (value.length === 1) {
          this.logged = true;
      }

    }, (error1: HttpErrorResponse) =>{
      console.error('error1', error1);
      this.loading = false;
    
    
    }); 

  } 
} 
*/
import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import IUser from '../models/IUsers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = 'Bret';
  logged = false;
  loading = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }

  connexion() {

    this.loading = true;

    this.http.get('https://jsonplaceholder.typicode.com/users?username=' + this.login)
      .subscribe((value: IUser[]) => {
        // traitement OK
        // console.log(value[0].company.name)
        if (value.length === 1) {
          this.logged = true;
        }
      }, (error1: HttpErrorResponse) => {
        // traitement KO
        console.error('error1', error1);
        this.loading = false;
      }, () => {
        // Finalisation OK
        this.loading = false;
      });

  }

}