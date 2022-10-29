import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutantFormComponent } from './mutant-form.component';

describe('MutantFormComponent', () => {
  let component: MutantFormComponent;
  let fixture: ComponentFixture<MutantFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutantFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MutantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
