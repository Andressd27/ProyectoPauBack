import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Town } from '../models/town.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TownsService {
  private apiUrl = `${environment.apiBaseUrl}/towns`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Town[]> {
    return this.http.get<Town[]>(this.apiUrl);
  }
}
