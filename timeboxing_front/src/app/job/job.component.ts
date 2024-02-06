import { Component, Input } from '@angular/core';
import { Job } from '../../types/Job';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [ NgIf ],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {
  @Input() public job?: Job;

  constructor() {}

  public onEditClicked() {

  }
}
