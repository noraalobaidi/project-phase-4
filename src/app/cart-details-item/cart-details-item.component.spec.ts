import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDetailsItemComponent } from './cart-details-item.component';

describe('CartDetailsItemComponent', () => {
  let component: CartDetailsItemComponent;
  let fixture: ComponentFixture<CartDetailsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartDetailsItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartDetailsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
