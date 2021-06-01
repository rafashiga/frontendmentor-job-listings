import { Component, Input, OnInit } from '@angular/core';
import { Job } from '@/shared/models/job';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() job: Job = {} as Job;

  constructor() {}

  ngOnInit(): void {}
}
