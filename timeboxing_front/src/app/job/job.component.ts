import { Component, Input } from '@angular/core';
import { Job } from '../../types/Job';
import { NgIf } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [ NgIf, ReactiveFormsModule ],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {
  @Input() public job?: Job;

  title = new FormControl(this.job!.title);
  description = new FormControl(this.job!.description);

  constructor() {}
}
