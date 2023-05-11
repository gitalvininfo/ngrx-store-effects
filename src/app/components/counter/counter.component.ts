import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CounterActions from "../../state/counter/counter.actions";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counter$?: Observable<number> = this.store.select('counter'); // must be the same on the app module

  constructor(private store: Store<{ counter: number }>) {

  }

  increment(): void {
    this.store.dispatch(CounterActions.increment()); // or increment()
  }

  decrement(): void {
    this.store.dispatch(CounterActions.decrement()); // or decrement()
  }

  reset(): void {
    this.store.dispatch(CounterActions.reset()); // or reset()
  }


}
