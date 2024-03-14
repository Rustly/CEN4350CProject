import { Component, OnInit } from '@angular/core';
import {
  NgFor,
} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Request } from '../request';
import { MOCK_REQUESTS_PENDING, MOCK_REQUESTS_DENIED, MOCK_REQUESTS_CONFIRMED } from './mock-lists';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-accountpage',
  templateUrl: './accountpage.component.html',
  styleUrl: './accountpage.component.css'
})
export class AccountpageComponent implements OnInit {
  constructor(private apiService: ApiService) { };

  requests: any;

  ngOnInit() {
    this.apiService.getRequests({ accountId: "1" }).subscribe(data => {
      this.requests = data;
    });
  }
}
