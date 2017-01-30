import { Price } from '../classes/price';

export interface Product {
    name: String;
    sku: String;
    price: Price;
    stock: number;
};

export interface ProductHeader {
    name: String;
    sku: String;
    price: String;
    stock: String;
}