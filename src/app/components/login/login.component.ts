import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages/';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private message: FlashMessagesService
  ) { }

  ngOnInit() {
    this.authService.checkAuth().subscribe(user => {
      if (user) {
        this.router.navigate(['/panel']);
      }
    });
  }

  onSubmit() {
    this.authService.login(this.email, this.password)
      .then(user => {
        this.message.show(`Login success`, {
          cssClass: 'alert-success',
          showCloseBtn: true,
          closeByBtn: true,
          timeout: 3000
        });
      })
      .catch(err => {
        this.message.show(err.message, {
          cssClass: 'alert-danger',
          showCloseBtn: true,
          closeByBtn: true,
          timeout: 3000
        });
      })
  }

}
