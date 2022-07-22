import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: any = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);

  }
}
