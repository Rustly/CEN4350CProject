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

  submitReview(author: string, authorEmail: string, comment: string) {
    console.info('review submitted');
    var time = new Date(Date.now());
    this.apiService.postReview({
        author: author,
        authorEmail: authorEmail,
        comment: comment,
        date: String(time.getMonth() + "." + time.getDay() + "." + time.getFullYear())
    });
  }
}
