import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AreaResponseModel } from 'src/app/models/domain/area/area-response-model';
import { AreaRequestModel } from 'src/app/models/domain/area/area-request-model';
import { AreaModelDetail } from 'src/app/models/domain/area/area.model';

@Injectable({
  providedIn: 'root'
})
export class AraeService {

  constructor(private http: HttpClient) {}

  findAll(): Observable<AreaResponseModel[]> {
    return this.http.get<AreaResponseModel[]>('http://localhost:9000/api/rest/v1/area/find-all-custom', { observe: 'body'});
  }

  findById(_id: string): Observable<AreaModelDetail> {
    return this.http.get<AreaModelDetail>('http://localhost:9000/api/rest/v1/area/find-by-id?id=' + _id, { observe: 'body' });
  }

  add(obj: AreaRequestModel): Observable<AreaModelDetail> {
    return this.http.post<AreaModelDetail>('http://localhost:9000/api/rest/v1/area', obj, {observe: 'body'});
  }

  edit(obj: AreaRequestModel, _id: string): Observable<AreaModelDetail> {
    return this.http.put<AreaModelDetail>('http://localhost:9000/api/rest/v1/area?id=' + _id, obj, {observe: 'body'});
  }

  deleteById( _id: string): Observable<any> {
    return this.http.delete('http://localhost:9000/api/rest/v1/area?id=' + _id, {observe: 'body'});
  }

}
