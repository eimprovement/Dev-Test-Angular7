import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog, MatSnackBar } from '@angular/material';

import { Pet } from './models/pet.interface';
import { PetsService } from './pets.service';
import { finalize } from 'rxjs/operators';
import { AlertYesNoComponent } from '@app/shared/alert-yes-no/alert-yes-no.component';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'name', 'markAsSold', 'deletePet'];
  isLoading = true;
  public dataSource: MatTableDataSource<Pet>;
  @ViewChild(MatPaginator, {}) paginator: MatPaginator;
  successMessageDuration = 3000; // 3 seconds
  errorMessageDuration = 10000; // 10 seconds

  constructor(private _petsService: PetsService, private dialog: MatDialog, private _snackBar: MatSnackBar) {}

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

  markPetAsSold(pet: Pet) {
    this._petsService
      .markPetAsSold(pet)
      .pipe(finalize(() => {}))
      .subscribe(
        (petResponse: Pet) => {
          this._snackBar.open(`The pet ${pet.name} has been marked as sold successfully.`, 'Done', {
            duration: this.successMessageDuration
          });
          //// TODO: refresh the UI list
        },
        error => {
          this._snackBar.open(this.mapMarkPetAsSoldErrorMessage(pet, error.status), 'Error', {
            duration: this.errorMessageDuration
          });
        }
      );
  }

  deletePet(pet: Pet) {
    console.log('Pet has been deleted.');

    const dialogRef = this.dialog.open(AlertYesNoComponent, {
      data: {
        title: 'Delete Pet',
        content: `Do you want to delete the selected pet?`,
        hasNoButton: true
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this._petsService
          .deletePet(pet)
          .pipe(finalize(() => {}))
          .subscribe(
            response => {
              console.log('Result', result, 'Respone', response);
              this._snackBar.open(`The pet ${pet.name} has been deleted successfully.`, 'Done', {
                duration: this.successMessageDuration
              });
              //// TODO: refresh the UI list
            },
            error => {
              this._snackBar.open(this.mapDeletePetErrorMessage(pet, error.status), 'Error', {
                duration: this.errorMessageDuration
              });
            }
          );
      }
    });
  }

  private mapMarkPetAsSoldErrorMessage(pet: Pet, status: number) {
    switch (status) {
      case 404:
        return `The pet ${pet.name} cannot be marked as solved. Pet does not exist.`;
      default:
        return 'An error has occurred. Please try again.';
    }
  }

  private mapDeletePetErrorMessage(pet: Pet, status: number) {
    switch (status) {
      case 404:
        return `The pet ${pet.name} cannot be deleted. Pet does not exist.`;
      default:
        return 'An error has occurred. Please try again.';
    }
  }
}
