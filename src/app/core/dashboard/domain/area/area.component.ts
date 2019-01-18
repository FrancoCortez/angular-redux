import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html'
})
export class AreaComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  msg: string;

  constructor(private router: Router, private location: Location) {
    this.subscription = this.router.events
      .subscribe((val) => {
        if (this.location.path() !== '') {
          if ( this.location.path().indexOf('area/edit') !== -1 ) {
            this.msg = 'Formulario para editar Áreas';
          } else if ( this.location.path().indexOf('area/add') !== -1 ) {
            this.msg = 'Formulario para agregar un nuevo Área';
          } else if ( this.location.path().indexOf('area/delete') !== -1 ) {
            this.msg = 'Detalle del Registro que se desea eliminar';
          } else {
            this.msg = 'Operaciones';
          }
        }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
