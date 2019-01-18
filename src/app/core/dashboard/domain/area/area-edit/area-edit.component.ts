import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AppState } from '../store/reducers/area.reducer';
import { Store, select } from '@ngrx/store';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as fromAreaAction from '../store/actions/area.actions';
import { AreaModelDetail } from 'src/app/models/domain/area/area.model';
import { AreaRequestModel } from 'src/app/models/domain/area/area-request-model';
@Component({
  selector: 'app-area-edit',
  templateUrl: './area-edit.component.html'
})
export class AreaEditComponent implements OnInit, OnDestroy {
  isLoading = false;
  rFormInsert: FormGroup;
  area: AreaModelDetail;
  private subscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder, private store: Store<AppState>, private router: Router, private route: ActivatedRoute) {
    this.rFormInsert = this.fb.group({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('')
    });
  }

  ngOnInit() {
    this.isLoading = true;
    this.route.paramMap
      .pipe(filter(fil => fil.keys != null))
      .subscribe((resp: ParamMap) => this.store.dispatch(new fromAreaAction.AreaFindById(resp.get('id'))));

    this.subscription = this.store
      .pipe(
        select(state => state.area.area),
        filter(fil => fil != null))
      .subscribe((resp: AreaModelDetail) => {
        this.area = resp;
        this.rFormInsert.controls['name'].setValue(resp.name);
        this.rFormInsert.controls['description'].setValue(resp.description);
        this.isLoading = false;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  update(value: AreaRequestModel) {
    this.store.dispatch(new fromAreaAction.AreaEdit(value, this.area._id));
  }

  back() {
    this.router.navigate(['dashboard/area']);
  }

}
