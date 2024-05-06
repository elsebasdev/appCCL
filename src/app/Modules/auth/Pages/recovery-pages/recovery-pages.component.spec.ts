import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryPagesComponent } from './recovery-pages.component';

describe('RecoveryPagesComponent', () => {
  let component: RecoveryPagesComponent;
  let fixture: ComponentFixture<RecoveryPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecoveryPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecoveryPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
