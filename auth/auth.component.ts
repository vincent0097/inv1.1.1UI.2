import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomersService } from '../src/app/customers.service';
import { Auth } from './auth';
import { AuthResponse } from './authresponse';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';


@Component({
  selector: 'app-root',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  public auth: Auth;
  public authorizeduser!: AuthResponse;
  constructor( private customersService: CustomersService,private router:Router){
    this.auth=new Auth();
  }

  checkAuth(){
    let User = sessionStorage.getItem('User' );
    if (!User){
      return false
    }  
    return true
  }
  

  onClick(){
    console.log();
  }
  onSubmit(data:NgForm){
    console.log(data.value);
    this.auth=data.value;
    this.customersService.createAuth(this.auth).subscribe(
      (response:AuthResponse) =>{
        console.log(response);

        if(response.result.message=="success"){
          this.authorizeduser=response
          //localStorage.setItem('User', AuthorizedUser);
          this.router.navigate(["/dash"])
          sessionStorage.setItem('User', this.authorizeduser.username);
        }else{
          alert(response.result.message)
        }
      },
      (error: HttpErrorResponse) => {
        alert("Please enter username and password: "+error.message);
      }
    );
      
      
  }
}
