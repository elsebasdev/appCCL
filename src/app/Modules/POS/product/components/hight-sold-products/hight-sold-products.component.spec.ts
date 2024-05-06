import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HightSoldProductsComponent } from './hight-sold-products.component';

describe('HightSoldProductsComponent', () => {
  let component: HightSoldProductsComponent;
  let fixture: ComponentFixture<HightSoldProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HightSoldProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HightSoldProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
