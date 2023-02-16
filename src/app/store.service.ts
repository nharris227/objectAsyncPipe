import { Injectable } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

export type ProgressBarData = { message: string; value: number; show: boolean };

@Injectable({ providedIn: 'root' })
export class StoreService {
  data: Observable<ProgressBarData> = interval(1000).pipe(
    map((i) => ({ message: "I'm the message", value: i % 100, show: true }))
  );
}
