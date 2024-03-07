import { Component, OnInit } from '@angular/core';
import { Petsitter } from '../petsitter';
import { MOCK_SITTERS } from './mock-petsitters';
import { ApiService } from '../api.service'; 

@Component({
  selector: 'app-petsitterspage',
  templateUrl: './petsitterspage.component.html',
  styleUrl: './petsitterspage.component.css'
})
export class PetsitterspageComponent implements OnInit {
  petsitters: any;
  constructor(private apiService: ApiService) { };
  ngOnInit() {
    this.apiService.getSitters().subscribe(data => {
      this.petsitters = data;
    });
  }
}
