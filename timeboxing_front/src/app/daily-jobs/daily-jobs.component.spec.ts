import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyJobsComponent } from './daily-jobs.component';

describe('DailyJobsComponent', () => {
  let component: DailyJobsComponent;
  let fixture: ComponentFixture<DailyJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyJobsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
