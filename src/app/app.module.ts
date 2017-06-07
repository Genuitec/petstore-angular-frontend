import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { APIS, BASE_PATH } from './rest';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

const appRoutes: Routes = [
  { path: 'category/:id', component: ProductListComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    APIS,
    { provide: BASE_PATH, useValue: 'http://localhost:8080/applicationPetstore/rest' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
