import { Component, OnInit } from '@angular/core';
import {
  NgFor,
} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Review } from './review';
import { MOCK_REVIEWS } from './mock-reviews';
import { ApiService } from '../api.service'; 

@Component({
  selector: 'app-reviewpage',
  templateUrl: './reviewpage.component.html',
  styleUrl: './reviewpage.component.css'
})
export class ReviewpageComponent implements OnInit {
  constructor(private apiService: ApiService) { };
  reviews: any;
  ngOnInit() {
    this.apiService.getReviews().subscribe(data => {
      this.reviews = data;
    });
  }
}
