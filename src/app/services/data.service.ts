import { Injectable } from '@angular/core';
import { Product, ProductHeader } from '../interfaces/product-interfaces';
import { sampleProductHeaders, sampleProductData } from '../sample-data/product-data';

@Injectable()
export class DataService {

  constructor() { }

  // TODO: Observable-ize this
  getProductData(): {headers: ProductHeader, data: Product[]} {
    return {
      headers: sampleProductHeaders,
      data: sampleProductData
    }
  }
}
