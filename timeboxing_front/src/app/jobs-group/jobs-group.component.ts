import { Component, importProvidersFrom } from '@angular/core';
import { Job } from '../../types/Job';
import { Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { JobComponent } from '../job/job.component';
import { JobsGroup } from '../../types/JobsGroup';

@Component({
  selector: 'app-jobs-group',
  standalone: true,
  imports: [ NgFor, JobComponent ],
  templateUrl: './jobs-group.component.html',
  styleUrl: './jobs-group.component.css'
})
export class JobsGroupComponent {
  
  @Input() public jobs?: JobsGroup;

  constructor() { }
}
