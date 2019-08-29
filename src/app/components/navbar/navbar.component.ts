import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userEmail: string;
  isLogin: boolean;
  isPublic: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe((e: Event) => {
      if (e instanceof NavigationEnd) {
        this.isPublic = e.url.indexOf('/panel') === -1;
      }
    });

    this.authService.checkAuth().subscribe(user => {
      if (user) {
        this.userEmail = user.email;
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
  }

  logout() {
    this.authService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      });
  }

}
