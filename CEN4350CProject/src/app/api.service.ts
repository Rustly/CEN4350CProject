import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from './reviewpage/review';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getSitters() {
    return this.http.get('http://localhost:3000/api/petsitters');
  }

  getReviews() {
    return this.http.get('http://localhost:3000/api/reviews');
  }

  postReview(review: any) {
    this.http.post('http://localhost:3000/api/addreview', review).subscribe((x) => {
      console.info(x);
    });
  }

  getRequests(accountId: any) {
    return this.http.post('http://localhost:3000/api/getrequests', accountId);
  }
}
