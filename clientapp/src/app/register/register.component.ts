import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public emailErrorVisible: boolean=false;
  public email: string=null;
  public passwordErrorVisible: boolean = false;
  public password: string=null;

  constructor() { }

  public signupButtonClicked(){
    this.emailErrorVisible=false;
    this.passwordErrorVisible=false;

    if(this.email==null || this.email==''){
      this.emailErrorVisible=true;
    }

    if(this.password==null || this.password==''){
      this.passwordErrorVisible=true;
    }
  }

  ngOnInit() {
  }

}
