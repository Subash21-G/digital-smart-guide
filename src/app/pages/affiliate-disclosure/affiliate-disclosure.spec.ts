import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateDisclosure } from './affiliate-disclosure';

describe('AffiliateDisclosure', () => {
  let component: AffiliateDisclosure;
  let fixture: ComponentFixture<AffiliateDisclosure>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffiliateDisclosure],
    }).compileComponents();

    fixture = TestBed.createComponent(AffiliateDisclosure);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
