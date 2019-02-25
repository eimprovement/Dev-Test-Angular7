import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Pet } from '@app/shared/models';
import { PetsService } from '@app/shared/services/pets.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit, OnDestroy {
  /*  Public Properties */
  dataLoaded = false;
  dataSource: MatTableDataSource<Pet>;
  displayedColumns: string[] = ['id', 'name', 'category'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  /*  Private Properties */
  private serviceSubs: Subscription[] = [];
  constructor(private petsService: PetsService) {}

  /*  Life Cycle Hooks */
  ngOnInit() {
    this.registeredEvents();
  }
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.serviceSubs.forEach(s => s.unsubscribe());
  }

  /*  Public Methods */
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  /*  Private Methods */
  private registeredEvents() {
    this.serviceSubs.push(
      this.petsService.getAvailablesPets().subscribe(data => {
        if (data) {
          this.dataSource = new MatTableDataSource<Pet>(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.dataLoaded = true;
        }
      })
    );
  }
}
