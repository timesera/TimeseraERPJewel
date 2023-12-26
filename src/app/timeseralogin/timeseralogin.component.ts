import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-timeseralogin',
  templateUrl: './timeseralogin.component.html',
  styleUrls: ['./timeseralogin.component.css']
})
export class TimeseraloginComponent implements OnInit{

  constructor(private router: Router, private cookieService: CookieService){
    
  }
  ngOnInit() {}

  credentialsVerification(){
    this.cookieService.set('tenantName', "ORIGIN_JST");
    this.router.navigateByUrl('/erp');
  }
}
