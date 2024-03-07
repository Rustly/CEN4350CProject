import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Petsitter } from '../petsitter';
import { MOCK_SITTERS } from '../petsitterspage/mock-petsitters'
import { ApiService } from '../api.service'; 

@Component({
  selector: 'app-petsitterdetails',
  templateUrl: './petsitterdetails.component.html',
  styleUrl: './petsitterdetails.component.css'
})
export class PetsitterdetailsComponent implements OnInit {
  petsitter: Petsitter | undefined;
  petsitters: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const sitterId = Number(routeParams.get('id'));

    this.apiService.getSitters().subscribe(data => {
      this.petsitters = data;
    });

    this.petsitter = this.petsitters.find((sitter: { id: number; }) => sitter.id == sitterId);
  }
}
