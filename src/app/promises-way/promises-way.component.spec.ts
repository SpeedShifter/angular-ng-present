import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisesWayComponent } from './promises-way.component';

describe('PromisesWayComponent', () => {
  let component: PromisesWayComponent;
  let fixture: ComponentFixture<PromisesWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromisesWayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromisesWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
