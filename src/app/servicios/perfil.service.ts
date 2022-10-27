import { Injectable } from '@angular/core';
import { Perfil } from '../interfaces/Perfil';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private apiServerUrl= environment.apiBaseUrl;
      constructor(private http: HttpClient){}
    
      public GetPerfil(): Observable<Perfil[]>{
        return this.http.get<Perfil[]>(`${this.apiServerUrl}/Perfil/todos`);
      }
      public addPerfil(perfil:Perfil): Observable<Perfil>{
        return this.http.post<Perfil>(`${this.apiServerUrl}/Perfil/agregar`,perfil);
      }
      public updatePerfil(perfil:Perfil): Observable<Perfil>{
        return this.http.put<Perfil>(`${this.apiServerUrl}/Perfil/editar`,perfil);
      }
      public deletePerfil(perfilId:number): Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/Perfil/borrar/${perfilId}`);
      }
}
