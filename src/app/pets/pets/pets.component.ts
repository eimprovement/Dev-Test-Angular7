import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Pet } from '@app/shared/models';
import { PetsService } from '@app/shared/services/pets.service';
import { Subscription } from 'rxjs';
import { take, takeWhile } from 'rxjs/operators';
import { AddPetComponent } from '../add-pet/add-pet.component';
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
  private alive = true;
  private serviceSubs: Subscription[] = [];
  constructor(private dialog: MatDialog, private petsService: PetsService) {}

  /*  Life Cycle Hooks */
  ngOnInit(): void {
    this.registeredEvents();
  }
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.alive = false;
    this.serviceSubs.forEach(s => s.unsubscribe());
  }

  /*  Public Methods */
  addPet(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(AddPetComponent, dialogConfig);

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe(data => {
        data.status = 1;
        this.petsService
          .addPet(data)
          .pipe(take(1))
          .subscribe(response => {
            const dataTable: Pet[] = this.dataSource.data;
            dataTable.push(response);
            this.dataSource.data = [...dataTable];
          });
      });
  }
  applyFilter(filterValue: string): void {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  /*  Private Methods */
  private registeredEvents(): void {
    this.petsService
      .getAvailablesPets()
      .pipe(takeWhile(() => this.alive))
      .subscribe(data => {
        if (data) {
          this.dataSource = new MatTableDataSource<Pet>(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.dataLoaded = true;
        }
      });
  }
}
