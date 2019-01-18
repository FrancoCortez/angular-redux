import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/reducers/area.reducer';
import { AreaFindAll } from '../store/actions/area.actions';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { AreaResponseModel } from 'src/app/models/domain/area/area-response-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html'
})
export class AreaListComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['name', 'description', 'star'];
  dataSource: MatTableDataSource<AreaResponseModel>;
  isLoadingAll = false;

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.subscription = this.store.pipe(
      select(state => state.area),
      filter(filters => filters.areasLoader)
    ).subscribe(resp => {
      this.createDataSource(resp.areas);
      this.isLoadingAll = resp.areasLoading;
    });

    this.store.dispatch(new AreaFindAll());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private createDataSource (source: AreaResponseModel[]): void {
    this.dataSource = new MatTableDataSource(source);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  sendDelete(_id: string): void {
    this.router.navigate(['dashboard/area/delete/' + _id]);
  }

  sendUpdate(_id: string): void {
    this.router.navigate(['dashboard/area/edit/' + _id]);
  }

  add() {
    this.router.navigate(['dashboard/area/add']);
  }

}
