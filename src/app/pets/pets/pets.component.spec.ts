import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@app/material.module';
import { SharedModule } from '@app/shared';
import { PipesModule } from '@app/shared/pipes';
import { PetsRoutingModule } from '../pets-routing.module';
import { PetsComponent } from './pets.component';

describe('PetsComponent', () => {
  let component: PetsComponent;
  let fixture: ComponentFixture<PetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PetsComponent],
      imports: [
        CommonModule,
        PetsRoutingModule,
        SharedModule,
        FlexLayoutModule,
        MaterialModule,
        ReactiveFormsModule,
        PipesModule,
        HttpClientModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Test pets', () => {
    it('should create pets', () => {
      expect(component).toBeTruthy();
    });
  });
});
