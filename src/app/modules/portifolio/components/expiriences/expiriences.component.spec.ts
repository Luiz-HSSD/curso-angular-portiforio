import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiriencesComponent } from './expiriences.component';

describe('ExpiriencesComponent', () => {
  let component: ExpiriencesComponent;
  let fixture: ComponentFixture<ExpiriencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpiriencesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpiriencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
