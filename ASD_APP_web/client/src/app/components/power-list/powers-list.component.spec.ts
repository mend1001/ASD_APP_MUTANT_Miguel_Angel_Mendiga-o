import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowersListComponent } from './powers-list.component';

describe('PowersListComponent', () => {
  let component: PowersListComponent;
  let fixture: ComponentFixture<PowersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
