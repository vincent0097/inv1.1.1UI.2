import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomersService } from '../src/app/customers.service';
import { Auth } from './auth';

@Component({
  selector: 'app-root',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  public auth: Auth;
  constructor( private customersService: CustomersService){
    this.auth=new Auth();
  }
  
  onClick(){
    console.log();
  }
  onSubmit(data:NgForm){
    console.log(data.value);
    this.auth=data.value;
    this.customersService.createAuth(this.auth).subscribe(
      (response:any) =>{

        if(response=="successful"){
          alert("Successful Login")
        }
      },
      (error: HttpErrorResponse) => {
        alert("Incorrect: "+error.message);
      }
    );
      
      
  }
}
