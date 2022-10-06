import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from 'src/app/interfaces/Educacion';
@Injectable({
    providedIn: 'root'
  })

export class EducacionService {
    private apiServerUrl= environment.apiBaseUrl;
      constructor(private http: HttpClient){}
    
      public GetEducacion(): Observable<Educacion[]>{
        return this.http.get<Educacion[]>(`${this.apiServerUrl}/Educacion/todos`);
      }
      public addEducacion(educacion:Educacion): Observable<Educacion>{
        return this.http.post<Educacion>(`${this.apiServerUrl}/Educacion/agregar`,educacion);
      }
      public updateEducacion(educacion:Educacion): Observable<Educacion>{
        return this.http.put<Educacion>(`${this.apiServerUrl}/Educacion/editar`,educacion);
      }
      public deleteEducacion(educacionId:number): Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/Educacion/borrar/${educacionId}`);
      }
    }
    