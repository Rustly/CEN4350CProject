import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { SittingRequest } from '../request'; 

@Component({
  selector: 'app-requestpage',
  templateUrl: './requestpage.component.html',
  styleUrl: './requestpage.component.css'
})
export class RequestpageComponent {
  constructor(private apiService: ApiService) { };

  addRequest(requester: number, petName: string, petWeight: number, petBreed: string, petAge: number, address: string, date: string, startTime: number, endTime: number, petSitter: number) {
    this.apiService.addRequest({
      id: -1,
      requesterId: requester,
      petName: petName,
      petWeight: petWeight,
      petBreed: petBreed,
      petAge: petAge,
      address: address,
      date: date,
      startTime: startTime,
      endTime: endTime,
      petSitter: petSitter
    });
  }

  parseInt(value: string) {
    return Number.parseInt(value);
  }
}
