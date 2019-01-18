import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers/area.reducer';
import { Router } from '@angular/router';
import { AreaRequestModel } from 'src/app/models/domain/area/area-request-model';
import * as fromAreaAction from '../store/actions/area.actions';
@Component({
  selector: 'app-area-add',
  templateUrl: './area-add.component.html'
})
export class AreaAddComponent implements OnInit {

  rFormInsert: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>, private router: Router) {
    this.rFormInsert = this.fb.group({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('')
    });
  }

  ngOnInit() {
  }

  insert(value: AreaRequestModel) {
    this.store.dispatch(new fromAreaAction.AreaAdd(value));
  }

  back() {
    this.router.navigate(['dashboard/area']);
  }

}
