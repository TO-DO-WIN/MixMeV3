import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.page.html',
  styleUrls: ['./cabinet.page.scss'],
})
export class CabinetPage implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
  }
}
