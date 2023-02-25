import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByAncestryComponent } from './filter-by-ancestry.component';

describe('FilterByAncestryComponent', () => {
  let component: FilterByAncestryComponent;
  let fixture: ComponentFixture<FilterByAncestryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterByAncestryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByAncestryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
