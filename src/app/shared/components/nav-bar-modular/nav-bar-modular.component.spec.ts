import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarModularComponent } from './nav-bar-modular.component';

describe('NavBarModularComponent', () => {
  let component: NavBarModularComponent;
  let fixture: ComponentFixture<NavBarModularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarModularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarModularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
