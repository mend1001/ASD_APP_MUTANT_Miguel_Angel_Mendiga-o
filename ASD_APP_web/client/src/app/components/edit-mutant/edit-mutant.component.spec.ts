import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMutantComponent } from './edit-mutant.component';

describe('EditMutantComponent', () => {
  let component: EditMutantComponent;
  let fixture: ComponentFixture<EditMutantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMutantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMutantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
