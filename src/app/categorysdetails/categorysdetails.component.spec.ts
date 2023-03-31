import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorysdetailsComponent } from './categorysdetails.component';

describe('CategorysdetailsComponent', () => {
  let component: CategorysdetailsComponent;
  let fixture: ComponentFixture<CategorysdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorysdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorysdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
