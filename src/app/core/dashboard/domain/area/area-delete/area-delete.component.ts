import { Component, OnInit, OnDestroy } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/reducers/area.reducer';
import { Subscription } from 'rxjs';
import { AreaModelDetail } from 'src/app/models/domain/area/area.model';
import * as fromAreaAction from '../store/actions/area.actions';

@Component({
  selector: 'app-area-delete',
  templateUrl: './area-delete.component.html'
})
export class AreaDeleteComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  area: AreaModelDetail;
  isLoading = true;
  constructor(private store: Store<AppState>, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(filter(fil => fil.keys != null))
      .subscribe((resp: ParamMap) => this.store.dispatch(new fromAreaAction.AreaFindById(resp.get('id'))));

    this.subscription = this.store.pipe(select(state => state.area), filter(fil => fil != null))
    .subscribe((resp: any) => {
      this.area = resp.area;
      this.isLoading = resp.actionCrud;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  back() {
    this.router.navigate(['dashboard/area']);
  }

  delete() {
    this.store.dispatch(new fromAreaAction.AreaDelete(this.area._id));
  }

}
