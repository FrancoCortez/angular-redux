import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DashboardSidevarComponent } from '../dashboard-sidevar/dashboard-sidevar.component';
export interface MatMenu {
  link: string;
  label: string;
}
@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.css']
})
export class DashboardNavComponent implements OnInit {

   @Input() sidervar: DashboardSidevarComponent;
  username: Observable<string>;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  matMenu: MatMenu[] = [
    {link: '/dashboard/perfil', label: 'Perfil' }
  ];

  constructor(private breakpointObserver: BreakpointObserver ) {}    // , private store: Store<AppState>) {}

  ngOnInit() {
    this.username = new Observable(observe => {observe.next('TEst'); observe.complete(); });
  }

  public logout(): void {
    // this.store.dispatch(new fromAction.AuthLogoutAction());
    console.log('Logout');
  }

}
