import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private message: FlashMessagesService,
  ) { }

  ngOnInit() {
    this.authService.checkAuth().subscribe(user => {
      if (user) {
        this.router.navigate(['/panel']);
      }
    });
  }

  onSubmit() {
    this.authService.register(this.email, this.password)
      .then(user => {
        this.message.show('Registration successful completed!', {
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
      });
  }

}
