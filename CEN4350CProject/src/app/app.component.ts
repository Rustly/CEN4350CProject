import { Component, OnInit } from '@angular/core';
import { HomepagebodyComponent } from './homepagebody/homepagebody.component'
import { ApiService } from './api.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Traveling Paws Pet Sitting';
  //message: any; 
  constructor(private apiService: ApiService) { };
  ngOnInit() {
    //this.apiService.getMessage().subscribe(data => {
    //  this.message = data;
    //});
  }
}
