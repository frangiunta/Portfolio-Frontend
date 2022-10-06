import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../interfaces/Experiencia';
@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
private apiServerUrl= environment.apiBaseUrl;
  constructor(private http: HttpClient){}

  public GetExperiencia(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.apiServerUrl}/Experiencia/todos`);
  }
  public addExperiencia(experiencia:Experiencia): Observable<Experiencia>{
    return this.http.post<Experiencia>(`${this.apiServerUrl}/Experiencia/agregar`,experiencia);
  }
  public updateExperiencia(experiencia:Experiencia): Observable<Experiencia>{
    return this.http.put<Experiencia>(`${this.apiServerUrl}/Experiencia/editar`,experiencia);
  }
  public deleteExperiencia(experienciaId:number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/Experiencia/borrar/${experienciaId}`)
  }
}
