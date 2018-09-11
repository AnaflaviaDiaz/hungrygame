import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public _authService: AuthService,
    public _router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this._authService.logoutUser();
    this._router.navigate(['/login']);
  }
}
