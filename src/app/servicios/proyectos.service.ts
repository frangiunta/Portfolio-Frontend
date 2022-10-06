import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyectos } from 'src/app/interfaces/Proyectos';

@Injectable({
    providedIn: 'root'
  })

export class ProyectosService {
    private apiServerUrl= environment.apiBaseUrl;
      constructor(private http: HttpClient){}
    
      public GetProyecto(): Observable<Proyectos[]>{
        return this.http.get<Proyectos[]>(`${this.apiServerUrl}/Proyecto/todos`);
      }
      public addProyecto(proyecto:Proyectos): Observable<Proyectos>{
        return this.http.post<Proyectos>(`${this.apiServerUrl}/Proyecto/agregar`,proyecto);
      }
      public updateProyecto(proyecto:Proyectos): Observable<Proyectos>{
        return this.http.put<Proyectos>(`${this.apiServerUrl}/Proyecto/editar`,proyecto);
      }
      public deleteProyecto(proyectoId:number): Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/Proyecto/borrar/${proyectoId}`);
      }
    }
    