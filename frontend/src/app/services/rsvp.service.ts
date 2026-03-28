import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RsvpForm, RsvpResponse } from '../models/rsvp.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class RsvpService {
  private apiUrl = `${environment.apiBaseUrl}/rsvp`;

  constructor(private http: HttpClient) {}

  submit(form: RsvpForm): Observable<RsvpResponse> {
    return this.http.post<RsvpResponse>(this.apiUrl, form);
  }
}
