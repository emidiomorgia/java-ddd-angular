/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RegisterComponent } from './register.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';


describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let button :HTMLButtonElement;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports : [FormsModule, RouterTestingModule.withRoutes([])]
    })
    .compileComponents();
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    button=fixture.nativeElement.querySelector('#signupButton');

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call signupButtonClicked when button is clicked', fakeAsync(()=>{
    spyOn(component,'signupButtonClicked').and.callThrough();

    fixture.detectChanges();
    tick();
    button.click();
    fixture.detectChanges();

    expect(component.signupButtonClicked).toHaveBeenCalled();

  }));

  it('when inputEmail change value binds to email field', fakeAsync(()=>{

    const hostElement = fixture.nativeElement;
    const inputEmail: HTMLInputElement = hostElement.querySelector('#inputEmail');
    fixture.detectChanges();
    inputEmail.value = 'bbb';
    inputEmail.dispatchEvent(new Event('input'));

    expect(component.email).toBe('bbb');

  }));

  it('when inputEmail empty and button clicked class is-invalid not present', fakeAsync(()=>{

    const hostElement = fixture.nativeElement;
    const inputEmail: HTMLInputElement = hostElement.querySelector('#inputEmail');
    fixture.detectChanges();
    inputEmail.value = 'bbb';
    inputEmail.dispatchEvent(new Event('input'));
    tick();
    button.click();
    fixture.detectChanges();
    expect(inputEmail.classList.contains('is-invalid')).toBeFalsy();

  }));

  it('when inputEmail not empty and button clicked class is-invalid is present', fakeAsync(()=>{

    const hostElement = fixture.nativeElement;
    const inputEmail: HTMLInputElement = hostElement.querySelector('#inputEmail');
    fixture.detectChanges();
    inputEmail.value = '';
    inputEmail.dispatchEvent(new Event('input'));
    tick();
    button.click();
    fixture.detectChanges();
    expect(inputEmail.classList.contains('is-invalid')).toBeTruthy();

  }));


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


