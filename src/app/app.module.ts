import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';
import { OrdersPageComponent } from './components/orders-page/orders-page.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ShippingPageComponent } from './components/shipping-page/shipping-page.component';
import { CompaniesPageComponent } from './components/companies-page/companies-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TableComponent } from './components/table/table.component';

import { DataService } from './services/data.service';
import { MockDataService } from './services/mock-data.service';

import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';

const appRoutes: Routes = [
  {
    path: 'companies',
    component: CompaniesPageComponent
  },
  {
    path: 'shipping',
    component: ShippingPageComponent
  },
  {
    path: 'products',
    component: ProductsPageComponent
  },
  {
    path: 'orders',
    component: OrdersPageComponent
  },
  {
    path: '',
    redirectTo: '/orders',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarItemComponent,
    OrdersPageComponent,
    PageNotFoundComponent,
    OrdersPageComponent,
    TableComponent,
    FilterPipe,
    SortPipe,
    ProductsPageComponent,
    ShippingPageComponent,
    CompaniesPageComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    {
      provide: DataService,
      useClass: DataService
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
