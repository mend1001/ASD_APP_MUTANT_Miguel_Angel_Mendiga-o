import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoderesListComponent } from './poderes-list.component';

describe('PoderesListComponent', () => {
  let component: PoderesListComponent;
  let fixture: ComponentFixture<PoderesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoderesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoderesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
