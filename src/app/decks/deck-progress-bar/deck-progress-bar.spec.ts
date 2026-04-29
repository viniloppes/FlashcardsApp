import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckProgressBar } from './deck-progress-bar';

describe('DeckProgressBar', () => {
  let component: DeckProgressBar;
  let fixture: ComponentFixture<DeckProgressBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeckProgressBar],
    }).compileComponents();

    fixture = TestBed.createComponent(DeckProgressBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
