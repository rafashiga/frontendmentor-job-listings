import { JobService } from './services/job.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Job } from '@/shared/models/job';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
})
export class JobComponent implements OnInit, OnDestroy {
  jobs: Job[] = [];
  allJobs: Job[] = [];
  subs: Subscription = new Subscription();
  filters: string[] = [];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.subs = this.jobService.getAll().subscribe((response) => {
      this.jobs = response;
      this.allJobs = response;
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  addFilter(filter: string): void {
    const filterFinded = this.filters.find((item) => item === filter);
    if (!filterFinded) {
      this.filters.push(filter);
      this.jobs = this.filterJobs(filter);
    }
  }

  filterJobs(filter: string): Job[] {
    return this.jobs.filter((job) => {
      if (
        job.level === filter ||
        job.role === filter ||
        job.languages.includes(filter) ||
        job.tools.includes(filter)
      ) {
        return job;
      }
      return;
    });
  }

  removeFilter(filter: string): void {
    const newFilters = this.filters.filter((item) => item !== filter);
    this.filters = newFilters;

    this.jobs = this.allJobs;
    this.filters.forEach((item) => {
      this.jobs = this.filterJobs(item);
    });
  }

  clearFilter(): void {
    this.filters = [];
    this.getAll();
  }
}
