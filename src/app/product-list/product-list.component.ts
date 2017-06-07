import { Product, ProductApi } from '../rest';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Product[] = [];

  constructor(private productApi: ProductApi, private route: ActivatedRoute) { }

  ngOnInit() {
    this.productApi.listAll().subscribe(
      value => setTimeout( () => {
        const allProducts = value;
        this.route.params.subscribe(
          params => {
            const id = +params['id']
            this.products = allProducts.filter(p => p.category.id === id)
          }
        )
      }, 2000)
    )

  }

}
