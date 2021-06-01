import { JobService } from './services/job.service';
import { Job } from './../../shared/models/job';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
})
export class JobComponent implements OnInit, OnDestroy {
  jobs: Job[] = [];
  subs: Subscription = new Subscription();

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.subs = this.jobService.getAll().subscribe((response) => {
      this.jobs = response;
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
