import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './Usuario';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
private apiServerUrl= environment.apiBaseUrl;
  constructor(private http: HttpClient){}

  public GetUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.apiServerUrl}/Usuario/todos`);
  }
  public addUsuario(usuario:Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${this.apiServerUrl}/Usuario/agregar`,usuario);
  }
  public updateUsuario(usuario:Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`${this.apiServerUrl}/Usuario/editar`,usuario);
  }
  public deleteUsuario(usuarioId:number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/Usuario/borrar/${usuarioId}`)
  }
}
