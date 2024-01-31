import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  products: any[] = [];
  columns: string[] = ['cover', '#No', 'Name', 'price'];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<any[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(data => {
      this.products = data;
    })
  }

}