import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { error } from 'console';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  //LOGIN
  loginCheck(tabelname: string, user: string, pass: string): Observable<any> {
    const data = {
      table: tabelname,
      email: user,
      passwrd: pass,
    };

    return this.http.post(`${this.url}/login`, data).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  //SELECT ALL RECORD
  selectAll(tablename: string): Observable<any> {
    return this.http.get(`${this.url}/${tablename}`).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  //SELECT ONE RECORD
  select(tablename: string, field: string, id: string): Observable<any> {
    return this.http.get(`${this.url}/${tablename}/${field}/${id}`).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  //INSERT ONE RECORD
  insert(tabelname: string, values: any): Observable<any> {
    return this.http.post(`${this.url}/${tabelname}`, values).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  //UPDATE RECORD
  update(tabelname: string, id: string, values: any): Observable<any> {
    return this.http.patch(`${this.url}/${tabelname}/${id}`, values).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  //DELETE ONE RECORD
  delete(tabelname: string, id: string): Observable<any> {
    return this.http.delete(`${this.url}/${tabelname}/${id}`).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
