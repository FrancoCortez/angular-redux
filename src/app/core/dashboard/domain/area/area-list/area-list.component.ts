import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/reducers/area.reducer';
import { AreaFindAll } from '../store/actions/area.actions';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.css']
})
export class AreaListComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.subscription = this.store.pipe(
      select(state => state.area),
      filter(filters => filters.areas != null)
    ).subscribe(resp => {
      console.log(resp);
    });

    this.store.dispatch(new AreaFindAll());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
