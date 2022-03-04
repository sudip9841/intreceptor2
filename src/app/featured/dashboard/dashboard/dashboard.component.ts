import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataResolver;
  constructor(private activatedRoute:ActivatedRoute) {
    console.log("hiiii dahsboard")
    console.log(activatedRoute.snapshot.data)
    this.dataResolver = activatedRoute.snapshot.data;
   }

  ngOnInit(): void {
  }

}
