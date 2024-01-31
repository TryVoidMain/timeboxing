import { Component, Input } from '@angular/core';
import { Job } from '../../types/Job';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {
  @Input() public job?: Job;

  constructor() {}
}
