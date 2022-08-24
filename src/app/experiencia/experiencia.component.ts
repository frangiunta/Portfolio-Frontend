import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ExperienciaService } from './experiencia.service';
import { Experiencia } from './Experiencia';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  public experiencias:Experiencia[]=[];
  public editExperiencia:Experiencia;
  public deleteExperiencia:Experiencia;
  public experiencia:Experiencia;

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
      public onAddExperiencia(addForm: NgForm): void {
        document.getElementById('add-employee-form').click();
        this.experienciaService.addExperiencia(addForm.value).subscribe(
          (response: Experiencia) => {
            console.log(response);
            this.getExperiencias();
            addForm.reset();
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
            addForm.reset();
          }
        );
      }
    
      public onUpdateExperiencia(experiencia: Experiencia): void {
        this.experienciaService.updateExperiencia(experiencia).subscribe(
          (response: Experiencia) => {
            console.log(response);
            this.getExperiencias();
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        );
      }
    
      public onDeleteExperiencia(experienciaId: number): void {
        this.experienciaService.deleteExperiencia(experienciaId).subscribe(
          (response: void) => {
            console.log(response);
            this.getExperiencias();
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        );
      }

public onOpenModal(experiencia: Experiencia, mode?: string): void {
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'modal');
  
  if (mode === 'edit') {
    this.editExperiencia = experiencia;
    button.setAttribute('data-target', '#updateExperiencia');
  }
  
  if (mode === 'add') {
    this.experiencia=experiencia;
    button.setAttribute('data-target', '#addExperiencia');
  }

  if (mode === 'delete') {
    this.deleteExperiencia = experiencia;
    button.setAttribute('data-target', '#deleteExperiencia');
  }
  container.appendChild(button);
  button.click();
}}
