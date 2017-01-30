import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { Product, ProductHeader } from '../../interfaces/product-interfaces';
import { Price } from '../../classes/price';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  headers: ProductHeader;
  data: Product[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getProductData();
  }

  getProductData() {
    let result = this.dataService.getProductData();
    this.headers = result.headers;
    this.data = result.data;
  }
}
