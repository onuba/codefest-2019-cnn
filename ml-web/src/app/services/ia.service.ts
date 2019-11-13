import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IaService {

  private resourceUrl = 'http://localhost:8000/api/ia';

  constructor(private http: HttpClient) { }

  public getPredict(imageUrl: string): Observable<any> {
    return this.http.get<any>(`${this.resourceUrl}/predict?imageUrl=${encodeURIComponent(imageUrl)}`);
  }

}
