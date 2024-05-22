import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [RouterLink, FormsModule, HttpClientModule]
})
export class LoginComponent {

  loginObj: Login;
  constructor(private http: HttpClient) {
    this.loginObj = new Login();
  }

  onLogin() {
    this.http.post('http://localhost:8080/api/auth', this.loginObj).subscribe((res: any) => {
      if (res.result) {
        console.log(res)
        alert("login succces")
      }
      else {
        alert(res.message)
        console.log(res)
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
