import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsGroupComponent } from './jobs-group.component';

describe('JobsGroupComponent', () => {
  let component: JobsGroupComponent;
  let fixture: ComponentFixture<JobsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
