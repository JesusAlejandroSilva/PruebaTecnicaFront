import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthletesInsertComponent } from './athletes-insert.component';

describe('AthletesInsertComponent', () => {
  let component: AthletesInsertComponent;
  let fixture: ComponentFixture<AthletesInsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AthletesInsertComponent]
    });
    fixture = TestBed.createComponent(AthletesInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
