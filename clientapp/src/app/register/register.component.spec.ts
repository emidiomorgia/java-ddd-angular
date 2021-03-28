/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RegisterComponent } from './register.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports : [RouterTestingModule.withRoutes([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  describe('signupButtonClicked', ()=>{
    it('should set emailErrorVisible to true when null or empty',()=>{
      component.emailErrorVisible=false;
      component.email=null;
      component.signupButtonClicked();
      expect(component.emailErrorVisible).toBeTruthy();

      component.emailErrorVisible=false;
      component.email='';
      component.signupButtonClicked();
      expect(component.emailErrorVisible).toBeTruthy();
    });

    it('should set emailErrorVisible to false when not (null or empty)',()=>{
      component.emailErrorVisible=false;
      component.email='email';
      component.signupButtonClicked();
      expect(component.emailErrorVisible).toBeFalsy();
    });

    it('should set passwordErrorVisible to true when null or empty',()=>{
      component.passwordErrorVisible=false;
      component.password=null;
      component.signupButtonClicked();
      expect(component.passwordErrorVisible).toBeTruthy();

      component.passwordErrorVisible=false;
      component.password='';
      component.signupButtonClicked();
      expect(component.passwordErrorVisible).toBeTruthy();
    });

    it('should set passwordErrorVisible to false when not (null or empty)',()=>{
      component.passwordErrorVisible=false;
      component.password='password';
      component.signupButtonClicked();
      expect(component.passwordErrorVisible).toBeFalsy();
    });


  });

});
function queryDebugElement(arg0: string): HTMLInputElement {
  throw new Error('Function not implemented.');
}

