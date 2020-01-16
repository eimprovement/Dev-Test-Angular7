import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

import { Pet } from './pet.interface';
import { PetsService } from './pets.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'name'];
  isLoading = true;
  public dataSource: MatTableDataSource<Pet>;
  @ViewChild(MatPaginator, {}) paginator: MatPaginator;

  constructor(private _petsService: PetsService) {}

  ngOnInit() {
    this.getAllAvailablePets();
  }

  getAllAvailablePets() {
    this._petsService
      .findAvailablePets()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((pets: Pet[]) => {
        this.dataSource = new MatTableDataSource(pets);
        this.dataSource.paginator = this.paginator;
      });
  }
}
