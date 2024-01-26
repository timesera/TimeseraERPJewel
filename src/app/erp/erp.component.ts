import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-erp',
  templateUrl: './erp.component.html',
  styleUrls: ['./erp.component.css']
})
export class ErpComponent {
  constructor(private router: Router, private cookieService: CookieService){
    
  }
panelStates: any;
isSidenavOpen: any;
isShowing: boolean = true;
togglePanel(arg0: string) {
throw new Error('Method not implemented.');
}
signOut() {
  this.router.navigateByUrl('/');
throw new Error('Method not implemented.');
}
editProfile() {
throw new Error('Method not implemented.');
}

viewProfile() {
throw new Error('Method not implemented.');
}
  title = 'sidenav';
  
  @ViewChild('sidenav') sidenav!: MatSidenav;
  toggleSidenav() {
    this.sidenav.toggle();
    this.isShowing = !this.isShowing;
}
}