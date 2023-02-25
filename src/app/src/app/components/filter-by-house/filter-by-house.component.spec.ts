import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByHouseComponent } from './filter-by-house.component';

describe('FilterByHouseComponent', () => {
  let component: FilterByHouseComponent;
  let fixture: ComponentFixture<FilterByHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterByHouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
