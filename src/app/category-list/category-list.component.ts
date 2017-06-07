import { Category, CategoryApi } from '../rest';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  public categories: Category[] = [];

  constructor(private categoryApi: CategoryApi) {
  }

  ngOnInit() {
    this.categoryApi.listAll().subscribe(
      value => {
        setTimeout(() => this.categories.push(...value), 2000);
      },
      error => console.error(JSON.stringify(error)),
      () => console.log('done')
    );
  }

}
