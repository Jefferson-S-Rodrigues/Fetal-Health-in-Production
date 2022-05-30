import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pregnancy } from '../shared/models/pregnancy';
import { ApiConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root'
})
export class PregnancyService extends ApiConfigService {

  url: string = `${this.apiUrl}/gestante`;

  constructor(private http: HttpClient) {
    super();
  }

  pregnancyName(cpf: string): Observable<Pregnancy> {
    return this.http.get<Pregnancy>([this.url, cpf].join('/'));
  }
}
