import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarItemComponent } from '../sidebar-item/sidebar-item.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menus = [
    {
      name: 'Orders',
      icon: 'http://placehold.it/60/60',
      link: '/orders'
    },
    {
      name: 'Products',
      icon: 'http://placehold.it/60/60',
      link: '/products'
    },
    {
      name: 'Shipping',
      icon: 'http://placehold.it/60/60',
      link: '/shipping'
    },
    {
      name: 'Companies',
      icon: 'http://placehold.it/60/60',
      link: '/companies'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(link: String) {
    this.router.navigate([link]);
  }

}
