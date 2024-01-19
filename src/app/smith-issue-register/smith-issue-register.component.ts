import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-smith-issue-register',
  templateUrl: './smith-issue-register.component.html',
  styleUrls: ['./smith-issue-register.component.css']
})
export class SmithIssueRegisterComponent {
  calculateTotal(column: string): number {
    return this.dataSource.data.reduce((total, element) => total + (element[column] || 0), 0);
  }

  getTotal(_t12: any): string | number {
    throw new Error('Method not implemented.');
  }
  displayedColumns: string[] = [ 'position', 'isuNo', 'isuDt', 'smthName', 'goldWt', 'copper', 'stones', 'totNwt'];

  smtIsuStrtDt: Date = new Date();
  smtIsuEndDt: Date = new Date();
  smthList: any = [];
  smthName: any = "";
  totPieces: number = 0;
  totGwt: number = 0;

  issueNo: any = "";
  pendngs: boolean = false;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();
  openingBalance: number | undefined;

  constructor(private service: ErpService, private datePipe: DatePipe) {}

  ngOnInit() {
  }

  getSmithIssueRegister() {
    const datePipe = new DatePipe('en-US');
    let smtIsuStrtDt = datePipe.transform(this.smtIsuStrtDt, 'yyyy/MM/dd') || '';
    let smtIsuEndDt = datePipe.transform(this.smtIsuEndDt, 'yyyy/MM/dd') || '';

    this.service.GetSmithIssueRegister(smtIsuStrtDt, smtIsuEndDt, this.smthName, this.issueNo).subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }

}
