import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-smith-receival-register',
  templateUrl: './smith-receival-register.component.html',
  styleUrls: ['./smith-receival-register.component.css']
})
export class SmithReceivalRegisterComponent {
  calculateTotal(column: string): number {
    return this.dataSource.data.reduce((total, element) => total + (element[column] || 0), 0);
  }

  getTotal(_t12: any): string | number {
    throw new Error('Method not implemented.');
  }
  displayedColumns: string[] = ['position','recNo','recDt','smthName','totalWt'];
  smthRcvlStrtDt:Date=new Date();
  smthRcvlEndDt:Date=new Date();
  smthList: any= [];
  smthName: any = "";
  recptNo:any = "";
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();
  constructor(private service: ErpService , private datePipe: DatePipe){
  }
  ngOnInit() {
  }
  getGoldSmithReceiptRegister() {
    const datePipe = new DatePipe('en-US');
    let smthRcvlStrtDt = datePipe.transform(this.smthRcvlStrtDt, 'yyyy/MM/dd') || '';
    let smthRcvlEndDt = datePipe.transform(this.smthRcvlEndDt, 'yyyy/MM/dd') || '';
    this.service.GetGoldSmithReceiptRegister(smthRcvlStrtDt, smthRcvlEndDt, this.smthName, this.recptNo).subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }
  particulars(name: any, smthRcvlStrtDt: string, smthRcvlEndDt: string, particulars: any): any {
  }
}

