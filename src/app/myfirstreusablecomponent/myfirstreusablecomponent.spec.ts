import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myfirstreusablecomponent } from './myfirstreusablecomponent';

describe('Myfirstreusablecomponent', () => {
  let component: Myfirstreusablecomponent;
  let fixture: ComponentFixture<Myfirstreusablecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Myfirstreusablecomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Myfirstreusablecomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
