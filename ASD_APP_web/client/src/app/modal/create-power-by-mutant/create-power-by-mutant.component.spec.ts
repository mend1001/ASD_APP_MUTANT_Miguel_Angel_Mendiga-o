import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePowerByMutantComponent } from './create-power-by-mutant.component';

describe('CreatePowerByMutantComponent', () => {
  let component: CreatePowerByMutantComponent;
  let fixture: ComponentFixture<CreatePowerByMutantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePowerByMutantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePowerByMutantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
