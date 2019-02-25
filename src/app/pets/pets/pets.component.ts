import { Component, OnInit } from '@angular/core';
import { PetsService } from '@app/shared/services/pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {
  constructor(private petsService: PetsService) {}

  /*  Life Cycle Hooks */
  ngOnInit() {
    this.registeredEvents();
  }

  /*  Private Methods */
  private registeredEvents() {
    this.petsService.getAvailablesPets().subscribe(data => {
      if (data) {
        console.log(data);
      }
    });
  }
}
