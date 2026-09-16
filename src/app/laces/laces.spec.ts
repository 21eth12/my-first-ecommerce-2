import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Laces } from './laces';

describe('Laces', () => {
  let component: Laces;
  let fixture: ComponentFixture<Laces>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Laces],
    }).compileComponents();

    fixture = TestBed.createComponent(Laces);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
