import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timeseralogin',
  templateUrl: './timeseralogin.component.html',
  styleUrls: ['./timeseralogin.component.css']
})
export class TimeseraloginComponent implements OnInit{

  constructor(private router: Router){
    
  }
  ngOnInit() {}

  credentialsVerification(){
    this.router.navigateByUrl('/erp');
  }
}
