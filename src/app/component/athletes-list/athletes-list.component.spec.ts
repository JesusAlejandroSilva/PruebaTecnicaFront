import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthletesListComponent } from './athletes-list.component';

describe('AthletesListComponent', () => {
  let component: AthletesListComponent;
  let fixture: ComponentFixture<AthletesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AthletesListComponent]
    });
    fixture = TestBed.createComponent(AthletesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
