import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [
    HttpClientModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './products.component.html',
  standalone: true,
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products : any
  constructor(private  http:HttpClient) {
  }

  ngOnInit(): void {
    this.http.get("http://localhost:1124/INVENTORY-SERVICE/products").subscribe({
      next : (data) =>{
        this.products = data
        console.log(this.products)
      },
      error : (err) =>{

      }
    });
  }

}
