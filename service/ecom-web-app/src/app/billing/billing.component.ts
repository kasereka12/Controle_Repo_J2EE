import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-billing',
  imports: [HttpClientModule, NgForOf, NgIf],
  templateUrl: './billing.component.html',
  standalone: true,
  styleUrl: './billing.component.css'
})
export class BillingComponent implements OnInit{
  billing : any;
  customerId! : any;
  constructor(private http:HttpClient , private router : Router , private  route: ActivatedRoute) {
    this.customerId =route.snapshot.params['customerId']
  }

  ngOnInit(): void {
    console.log(this.customerId);
    this.http.get(`http://localhost:1124/BILLING-SERVICE/bills/search/byCustomerId?customerId="+${this.customerId}`).subscribe({
      next : (data) =>{
        this.billing = data
        console.log(this.billing)
      },
      error : (err) =>{

      }
    });
  }

}
