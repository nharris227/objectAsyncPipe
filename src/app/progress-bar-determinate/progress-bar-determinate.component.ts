import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { JobSteps } from '../app.component';

@Component({
  selector: 'app-progress-bar-determinate',
  templateUrl: './progress-bar-determinate.component.html',
  styleUrls: ['./progress-bar-determinate.component.css'],
})
export class ProgressBarDeterminateComponent implements OnInit {
  @Input() progressBarData: JobSteps[] | null = null;
  @Input() loading: any | null = 'hi';

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(`ngOnChanges`, changes);
  }
}
