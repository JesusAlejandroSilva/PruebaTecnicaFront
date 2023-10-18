import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthletesDeleteComponent } from './athletes-delete.component';

describe('AthletesDeleteComponent', () => {
  let component: AthletesDeleteComponent;
  let fixture: ComponentFixture<AthletesDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AthletesDeleteComponent]
    });
    fixture = TestBed.createComponent(AthletesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
