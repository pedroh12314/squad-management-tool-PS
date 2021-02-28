import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightPlayersComponent } from './insight-players.component';

describe('InsightPlayersComponent', () => {
  let component: InsightPlayersComponent;
  let fixture: ComponentFixture<InsightPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsightPlayersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
