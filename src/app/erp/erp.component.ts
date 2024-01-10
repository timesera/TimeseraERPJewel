import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-erp',
  templateUrl: './erp.component.html',
  styleUrls: ['./erp.component.css']
})
export class ErpComponent {
panelStates: any;
isSidenavOpen: any;
isShowing: boolean = true;
togglePanel(arg0: string) {
throw new Error('Method not implemented.');
}
signOut() {
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
export class YourComponent {

  // Define the functions to be called when menu items are clicked
  viewProfile(): void {
    // Add logic for viewing profile
    console.log('View Profile clicked');
  }

  editProfile(): void {
    // Add logic for editing profile
    console.log('Edit Profile clicked');
  }

  signOut(): void {
    // Add logic for signing out
    console.log('Sign Out clicked');
  }
}
