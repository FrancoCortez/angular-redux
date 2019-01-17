import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AreaResponseModel } from 'src/app/models/domain/area/area-response-model';

@Injectable({
  providedIn: 'root'
})
export class AraeService {

  constructor(private http: HttpClient) {}

  findAll(): Observable<AreaResponseModel[]> {
    return this.http.get<AreaResponseModel[]>('http://localhost:9000/api/rest/v1/area/find-all-custom', { observe: 'body'});
  }

}
