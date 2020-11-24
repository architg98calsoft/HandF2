import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css'],
})
export class LoginCompComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  error: string = null;

  onLogin(f: NgForm) {
    this.authService.login(f.value.email, f.value.password).subscribe(
      (resData) => {
        console.log(resData);
      },
      (errorMessage) => {
        console.log(errorMessage);
        this.error = errorMessage;
      }
    );
  }
}
