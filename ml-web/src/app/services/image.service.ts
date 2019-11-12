import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private resourceUrl = 'http://localhost:8000/api/images';

  constructor(private http: HttpClient) { }

  public getRandom(): Observable<any> {
    return this.http.get<any>(`${this.resourceUrl}/random`);
  }

}
