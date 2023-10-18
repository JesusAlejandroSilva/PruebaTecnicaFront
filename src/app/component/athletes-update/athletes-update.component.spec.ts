import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthletesUpdateComponent } from './athletes-update.component';

describe('AthletesUpdateComponent', () => {
  let component: AthletesUpdateComponent;
  let fixture: ComponentFixture<AthletesUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AthletesUpdateComponent]
    });
    fixture = TestBed.createComponent(AthletesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
