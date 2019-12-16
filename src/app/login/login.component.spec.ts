import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { MatInput, MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';






describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let httpTestingController : HttpTestingController;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatInputModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatCheckboxModule,
        HttpClientModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.get(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


it( 'good init', () => { 
  expect(component.logged).toBeFalsy();
  expect(component.loading).toBeFalsy();
  expect(component.login).toEqual('Bret');
});

it( 'connexion done', () => {
  expect(component.logged).toBeFalsy();
  expect(component.login).toEqual('Bret');

  // execution de la methode de test
  component.connexion();

  // att toi a avoir une requette Get par default sur telle url
  //const req = httpTestingController.expectOne( url'https://jsonplaceholder.typicode.com/users?username=')

  //repond a la requete avec telle reponse
  //req.flush([{}]);

  // verification que toutes les requetes sont traitees
  httpTestingController.verify();

  // test de bon deroulement de la methode
  expect(component.logged).toBeTruthy();

}); 




  
}); 