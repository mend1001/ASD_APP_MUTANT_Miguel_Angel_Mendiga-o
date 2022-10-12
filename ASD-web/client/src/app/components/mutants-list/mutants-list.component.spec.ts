import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutantsListComponent } from './mutants-list.component';

describe('MutantsListComponent', () => {
  let component: MutantsListComponent;
  let fixture: ComponentFixture<MutantsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutantsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MutantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
