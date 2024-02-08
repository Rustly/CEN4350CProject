import { Component } from '@angular/core';
import {
  NgFor,
} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Request } from '../request';
import { MOCK_REQUESTS_PENDING, MOCK_REQUESTS_DENIED, MOCK_REQUESTS_CONFIRMED } from './mock-lists';

@Component({
  selector: 'app-accountpage',
  templateUrl: './accountpage.component.html',
  styleUrl: './accountpage.component.css'
})
export class AccountpageComponent {
  requests_denied = MOCK_REQUESTS_DENIED;
  requests_pending = MOCK_REQUESTS_PENDING;
  requests_confirmed = MOCK_REQUESTS_CONFIRMED;
}
