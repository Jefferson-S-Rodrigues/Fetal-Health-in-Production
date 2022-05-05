import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ctgexam } from '../shared/models/ctgexam';
import { ApiConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root'
})
export class CtgExamService extends ApiConfigService {

  url: string = `${this.apiUrl}/ctgexam`;

  constructor(private http: HttpClient) {
    super();
  }

  saveCTGExam(exam: Ctgexam): Observable<Ctgexam> {
    return this.http.post<Ctgexam>(this.url, exam);
  }
}
