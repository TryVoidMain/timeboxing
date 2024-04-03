import { Component, Input } from '@angular/core';
import { Job } from '../../types/Job';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [ NgIf, FormsModule ],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {
  @Input() public job?: Job;
  public jobForEdit?: Job;
  public dialog?: HTMLDialogElement;

  constructor() {}

  public onEditClicked() {
    this.jobForEdit = { ...this.job! };
    this.dialog = document.querySelector('#jobsdialog')!;
    this.dialog.showModal();
  }

  public onApply() {
    this.job = { ...this.jobForEdit! };
    this.dialog?.close();
  }

  public onCancel() {
    this.dialog?.close();
  }
}
