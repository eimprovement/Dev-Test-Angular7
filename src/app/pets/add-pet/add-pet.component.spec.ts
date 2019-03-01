import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@app/material.module';
import { AddPetComponent } from './add-pet.component';

describe('AddPetComponent', () => {
  let component: AddPetComponent;
  let fixture: ComponentFixture<AddPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddPetComponent],
      imports: [BrowserAnimationsModule, ReactiveFormsModule, MaterialModule],
      providers: [{ provide: MatDialogRef, useValue: {} }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create add pet modal', () => {
    expect(component).toBeTruthy();
  });
});
