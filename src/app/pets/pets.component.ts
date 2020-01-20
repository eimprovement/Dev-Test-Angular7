import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog, MatSnackBar } from '@angular/material';

import { Pet } from './models/pet.interface';
import { PetsService } from './services/pets.service';
import { finalize } from 'rxjs/operators';
import { AlertYesNoComponent } from '@app/shared/alert-yes-no/alert-yes-no.component';
import { PetFormComponent } from './modals/pet-form/pet-form.component';
import { CreatePet } from './models/create-pet.interface';

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

  onSearch(value: string) {
    this.dataSource.filter = value;
  }

  addPet() {
    const dialogRef = this.dialog.open(PetFormComponent, {
      data: { name: '' }
    });

    dialogRef.afterClosed().subscribe((pet: CreatePet) => {
      if (pet !== undefined && pet !== null) {
        this._petsService.createPet(pet).subscribe(
          (petCreated: Pet) => {
            this._snackBar.open(`The pet ${petCreated.name} has been created successfully.`, 'Done', {
              duration: this.successMessageDuration
            });
            this.addPetToDataSource(petCreated);
          },
          error => {
            this._snackBar.open(`An error has occurred creating the pet. Please try again.`, 'Error', {
              duration: this.errorMessageDuration
            });
          }
        );
      }
    });
  }

  markPetAsSold(pet: Pet) {
    const dialogRef = this.dialog.open(AlertYesNoComponent, {
      data: {
        title: 'Sell Pet',
        content: `Do you want to sell the pet "${pet.name}"?`,
        hasNoButton: true
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this._petsService
          .markPetAsSold(pet)
          .pipe(finalize(() => {}))
          .subscribe(
            (petResponse: Pet) => {
              this._snackBar.open(`The pet ${pet.name} has been sold successfully.`, 'Done', {
                duration: this.successMessageDuration
              });
              this.deletePetFromDataSource(pet);
            },
            error => {
              this._snackBar.open(this.mapMarkPetAsSoldErrorMessage(pet, error.status), 'Error', {
                duration: this.errorMessageDuration
              });
            }
          );
      }
    });
  }

  deletePet(pet: Pet) {
    console.log('Pet has been deleted.');

    const dialogRef = this.dialog.open(AlertYesNoComponent, {
      data: {
        title: 'Delete Pet',
        content: `Do you want to delete the pet "${pet.name}"?`,
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
              this._snackBar.open(`The pet ${pet.name} has been deleted successfully.`, 'Done', {
                duration: this.successMessageDuration
              });
              this.deletePetFromDataSource(pet);
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

  private addPetToDataSource(pet: Pet) {
    const currentDataSource = this.dataSource.data;
    currentDataSource.push(pet);
    this.dataSource.data = [...currentDataSource];
  }

  private deletePetFromDataSource(pet: Pet) {
    const currentDataSource = this.dataSource.data;
    const index = currentDataSource.indexOf(pet);
    if (index > -1) {
      currentDataSource.splice(index, 1);
    }
    this.dataSource.data = [...currentDataSource];
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
