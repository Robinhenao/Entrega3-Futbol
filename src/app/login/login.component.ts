import { Component } from '@angular/core';
import { RouterLink, Router ,NavigationEnd} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [RouterLink, FormsModule, HttpClientModule,CommonModule]
})
export class LoginComponent {

  loginObj: Login;
  
  constructor(private http:HttpClient ,private router: Router) {
    this.loginObj = new Login();
  }

 
  onLogin() {
    this.http.post('http://localhost:8080/api/auth', this.loginObj).subscribe((res: any) => {
      if (res.result) {
        console.log(res)
        alert("error succces")
        
      }
      else {
        alert("login succces")
        this.router.navigate(['/equipo']);
      } 
    })
  }

  

}
export class Login {
  username: string;
  password: string;
  constructor() {
    this.username = "";
    this.password = "";
  }
}
