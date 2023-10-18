import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsInsertComponent } from './records-insert.component';

describe('RecordsInsertComponent', () => {
  let component: RecordsInsertComponent;
  let fixture: ComponentFixture<RecordsInsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordsInsertComponent]
    });
    fixture = TestBed.createComponent(RecordsInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
