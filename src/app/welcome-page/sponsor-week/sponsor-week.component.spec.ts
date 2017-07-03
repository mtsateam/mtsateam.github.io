import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorWeekComponent } from './sponsor-week.component';

describe('SponsorWeekComponent', () => {
  let component: SponsorWeekComponent;
  let fixture: ComponentFixture<SponsorWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
