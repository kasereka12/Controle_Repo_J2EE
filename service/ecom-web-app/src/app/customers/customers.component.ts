import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgForOf, NgIf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customers',
  imports: [HttpClientModule,    NgIf,
    NgForOf],
  templateUrl: './customers.component.html',
  standalone: true,
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit{
  customers :any
    constructor(private  Http: HttpClient , private  router : Router) {
    }
  ngOnInit(): void {
    this.Http.get("http://localhost:1124/CUSTOMER-SERVICE/customers").subscribe({
      next : (data) =>{
        this.customers = data
        console.log(this.customers)
      },
      error : (err) =>{

      }
    });
  }
  getBilling(p: any) {
      this.router.navigateByUrl("/billing/"+p.id);
      console.log(p.id);
  }
}
