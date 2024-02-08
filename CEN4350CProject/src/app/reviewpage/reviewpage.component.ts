import { Component } from '@angular/core';
import {
  NgFor,
} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Review } from './review';
import { MOCK_REVIEWS } from './mock-reviews';

@Component({
  selector: 'app-reviewpage',
  templateUrl: './reviewpage.component.html',
  styleUrl: './reviewpage.component.css'
})
export class ReviewpageComponent {
  reviews = MOCK_REVIEWS;
}
