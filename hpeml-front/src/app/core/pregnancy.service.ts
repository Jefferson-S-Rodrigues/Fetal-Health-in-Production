import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pregnancy } from '../shared/models/pregnancy';

const url = 'http://localhost:8000/gestante';

@Injectable({
  providedIn: 'root'
})
export class PregnancyService {

  constructor(private http: HttpClient) { }

  pregnancyName(cpf: string): Observable<Pregnancy> {
    return this.http.get<Pregnancy>([url, cpf].join('/'));
  }
}
