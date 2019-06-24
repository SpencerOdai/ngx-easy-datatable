import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public tableData: any;

  constructor(public http: HttpClient) {}

  public ngOnInit() {
    this.getTableData();
  }

  public getTableData(): void {
    this.tableData = this.http.get<any[]>('assets/data/table-data.json');
  }
}
