import { Component } from '@angular/core';
import { AuthComponent } from 'auth/auth.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  
  logOut(){
    sessionStorage.clear();
    
  }
  
}
