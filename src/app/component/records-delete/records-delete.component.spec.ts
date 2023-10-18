import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsDeleteComponent } from './records-delete.component';

describe('RecordsDeleteComponent', () => {
  let component: RecordsDeleteComponent;
  let fixture: ComponentFixture<RecordsDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordsDeleteComponent]
    });
    fixture = TestBed.createComponent(RecordsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
