import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductToBillComponent } from './add-product-to-bill.component';

describe('AddProductToBillComponent', () => {
  let component: AddProductToBillComponent;
  let fixture: ComponentFixture<AddProductToBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductToBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductToBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
