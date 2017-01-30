import { Product, ProductHeader } from '../interfaces/product-interfaces';
import { Price } from '../classes/price';

export const sampleProductHeaders: ProductHeader = {
  name: 'Name',
  sku: 'SKU',
  price: 'Price',
  stock: 'Stock'
};

export const sampleProductData: Product[] = [
  {
    name: 'Hammer',
    sku: '105631S',
    price: new Price(5, 0),
    stock: 34
  },
  {
    name: '25lb Crane Hook',
    sku: 'CH254913',
    price: new Price(84, 99),
    stock: 6
  },
  {
    name: 'Screwdriver',
    sku: '7843156',
    price: new Price(4, 99),
    stock: 71
  }
];