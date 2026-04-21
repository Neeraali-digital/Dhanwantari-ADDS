import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BscNursing } from './bsc-nursing';

describe('BscNursing', () => {
  let component: BscNursing;
  let fixture: ComponentFixture<BscNursing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BscNursing],
    }).compileComponents();

    fixture = TestBed.createComponent(BscNursing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
