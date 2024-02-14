import { Component } from '@angular/core';
import { Petsitter } from '../petsitter';
import { MOCK_SITTERS } from './mock-petsitters';

@Component({
  selector: 'app-petsitterspage',
  templateUrl: './petsitterspage.component.html',
  styleUrl: './petsitterspage.component.css'
})
export class PetsitterspageComponent {
  petsitters = MOCK_SITTERS;
}
