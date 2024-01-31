import { Component, Input } from '@angular/core';
import { JobsGroup } from '../../types/JobsGroup';
import { NgFor } from '@angular/common';
import { JobsGroupComponent } from '../jobs-group/jobs-group.component';

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [ NgFor, JobsGroupComponent ],
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.css'
})
export class JobsListComponent {
  @Input() public jobsGroups?: Array<JobsGroup>; 
}
