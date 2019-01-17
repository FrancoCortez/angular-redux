import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface MenuItem {
  link: string;
  icon: string;
  label: string;
}

export interface MenuCab {
  icon: string;
  label: string;
  items: MenuItem[];
}
@Component({
  selector: 'app-dashboard-sidevar',
  templateUrl: './dashboard-sidevar.component.html',
  styleUrls: ['./dashboard-sidevar.component.css']
})
export class DashboardSidevarComponent implements OnInit {

  routesNav: MenuCab[] = [
    {icon: 'domain_disabled', label: 'Parametros de Dominio', items : [
        {link: '/dashboard/area', icon: 'pages', label: 'Areas'},
        {link: '/dashboard/client-status', icon: 'pages', label: 'Estados de Clientes'},
        {link: '/dashboard/project-fase', icon: 'pages', label: 'Fases de Proyecto'},
        {link: '/dashboard/project-status', icon: 'pages', label: 'Estado de Proyecto'},
        {link: '/dashboard/role', icon: 'pages', label: 'Roles'},
        {link: '/dashboard/type-user', icon: 'pages', label: 'Tipos de Usuario'},
    ]},
    {icon: 'account_circle', label: 'Cuentas', items : [
    ]},
    {icon: 'account_circle', label: 'Demograficos', items : [
    ]},
    {icon: 'account_circle', label: 'Clientes', items : [
    ]},
    {icon: 'account_circle', label: 'Proyectos', items : [
    ]},
    {icon: 'account_circle', label: 'Tareas', items : [
    ]},
  ];
  panelOpenState = false;
  public username: string;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {


  }

  public logout(): void {
    // this.srvAuth.logOut();
  }

}
