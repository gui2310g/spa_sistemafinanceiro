import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoggedUser } from '../../models/login.model';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  login(LoggedUser: LoggedUser): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth`, LoggedUser).pipe(
      tap((response) => sessionStorage.setItem('token', response.token)),
      catchError(this.handleError)
    );
  }

  create(User: User): Observable<User> {
    return this.http
      .post<User>(`${this.apiUrl}/usuarios`, User)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage: string;
    if (error.status === 409) errorMessage = 'Email ou senha invalido';
    if (error.status === 400) errorMessage = 'Email ja existente';
    return throwError(() => new Error(errorMessage));
  }
}
