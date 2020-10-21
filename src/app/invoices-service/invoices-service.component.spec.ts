import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesServiceComponent } from './invoices-service.component';

describe('InvoicesServiceComponent', () => {
  let component: InvoicesServiceComponent;
  let fixture: ComponentFixture<InvoicesServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicesServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
