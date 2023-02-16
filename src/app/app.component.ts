import { Component } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
  tap,
  timeout,
  switchMap,
  of,
  delay,
} from 'rxjs';
import { ProgressBarData, StoreService } from './store.service';

export class DummyUnit {
  unit: string;
  value: number;
}

export class JobSteps {
  name: string;
  unit: DummyUnit;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  progressBarData$: Observable<JobSteps[]> | null = null;
  constructor(public store: StoreService) {}
  compoundData: BehaviorSubject<DummyUnit> = new BehaviorSubject<DummyUnit>(
    null
  );
  compoundData$ = this.compoundData.asObservable();

  jobData: BehaviorSubject<JobSteps[]> = new BehaviorSubject<JobSteps[]>([
    {
      name: 'job 1',
      unit: null,
    },
    {
      name: 'job 2',
      unit: null,
    },
  ]);
  jobData$ = this.jobData.asObservable();

  loading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  loading$ = this.loading.asObservable();

  unitToggle = false;
  stop() {
    if (this.unitToggle) {
      this.compoundData.next({ unit: 'metric', value: 1 });
      this.unitToggle = !this.unitToggle;
    } else {
      this.compoundData.next({ unit: 'us', value: 12 });
      this.unitToggle = !this.unitToggle;
    }
  }

  start() {
    this.progressBarData$ = combineLatest([
      this.compoundData$,
      this.jobData$,
    ]).pipe(
      tap((_) => {
        this.loading.next(true);
        console.log('Started loading');
      }),
      switchMap(([unit, jobs]) => {
        jobs.forEach((job) => {
          job.unit = unit;
        });
        return of(jobs).pipe(delay(2000));
      }),
      tap((_) => {
        setTime
        this.loading.next(false);
      })
    );
  }
}
