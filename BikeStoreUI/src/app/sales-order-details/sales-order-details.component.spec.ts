import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOrderDetailsComponent } from './sales-order-details.component';

describe('SalesOrderDetailsComponent', () => {
  let component: SalesOrderDetailsComponent;
  let fixture: ComponentFixture<SalesOrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesOrderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
