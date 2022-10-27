import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUser } from '../interfaces/security/nuevo-user';
import { Observable } from 'rxjs';
import { LoginUser } from '../interfaces/security/login-user';
import { JwtDTO } from '../interfaces/security/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'http://localhost:8080/auth/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUser): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUser): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'login', loginUsuario);
  }
}