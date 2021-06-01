import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Job } from '@/shared/models/job';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() job: Job = {} as Job;
  @Output() filterClick = new EventEmitter<string>();

  addFilter(filter: string): void {
    this.filterClick.emit(filter);
  }
}
