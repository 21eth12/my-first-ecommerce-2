import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesAndBags } from './shoes-and-bags';

describe('ShoesAndBags', () => {
  let component: ShoesAndBags;
  let fixture: ComponentFixture<ShoesAndBags>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoesAndBags],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoesAndBags);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
