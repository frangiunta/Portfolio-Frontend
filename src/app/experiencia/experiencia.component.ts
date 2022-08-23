import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ExperienciaService } from './experiencia.service';
import { Experiencia } from './Experiencia';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  public experiencias:Experiencia[]
  constructor(private experienciaService:ExperienciaService) { }

  ngOnInit(): void {
    this.getExperiencias();
  }
public getExperiencias():void{
  this.experienciaService.GetExperiencia().subscribe
  (
      (response:Experiencia[])=>{
        this.experiencias=response;
        console.log(this.experiencias);}
      ,(error:HttpErrorResponse)=>
        {alert(error.message)}
  );
      }
}

