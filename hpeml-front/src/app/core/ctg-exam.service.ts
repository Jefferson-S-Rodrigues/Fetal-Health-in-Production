import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ctgexam } from '../shared/models/ctgexam';

const url = 'http://localhost/api/ctgexam';

@Injectable({
  providedIn: 'root'
})
export class CtgExamService {

  constructor(private http: HttpClient) { }

  saveCTGExam(exam: Ctgexam): Observable<Ctgexam> {
    return this.http.post<Ctgexam>(url, exam);
  }
}
