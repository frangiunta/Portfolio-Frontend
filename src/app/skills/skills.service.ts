import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skills } from './skills';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SkillsService {
private apiServerUrl= environment.apiBaseUrl;
  constructor(private http: HttpClient){}

public GetSkill(): Observable<Skills[]>{
    return this.http.get<Skills[]>(`${this.apiServerUrl}/Skills/todos`);
}
public addSkill(skill:Skills): Observable<Skills>{
    return this.http.post<Skills>(`${this.apiServerUrl}/Skills/agregar`,skill);
}
public updateSkill(skill:Skills): Observable<Skills>{
    return this.http.put<Skills>(`${this.apiServerUrl}/Skills/editar`,skill);
}
public deleteSkill(skillId:number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/Skills/borrar/${skillId}`)
  }
}

