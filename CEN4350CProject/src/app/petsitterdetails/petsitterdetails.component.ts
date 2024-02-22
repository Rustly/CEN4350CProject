import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Petsitter } from '../petsitter';

import { MOCK_SITTERS } from '../petsitterspage/mock-petsitters'

@Component({
  selector: 'app-petsitterdetails',
  templateUrl: './petsitterdetails.component.html',
  styleUrl: './petsitterdetails.component.css'
})
export class PetsitterdetailsComponent implements OnInit {
  petsitter: Petsitter | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const sitterId = Number(routeParams.get('id'));

    this.petsitter = MOCK_SITTERS.find(sitter => sitter.id == sitterId);
  }
}
