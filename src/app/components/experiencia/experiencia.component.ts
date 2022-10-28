import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Experiencia } from 'src/app/interfaces/Experiencia';
import { NgForm } from '@angular/forms';
import { TokenService } from 'src/app/servicios/token.service';
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

  roles: string[] = [];
  isAdmin = false;
  constructor(private experienciaService:ExperienciaService,private tokenService:TokenService) { }

  ngOnInit(): void {
    this.getExperiencias();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(role => {
      if (role === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }
public getExperiencias():void{
  this.experienciaService.GetExperiencia().subscribe
  (
      (response:Experiencia[])=>{
        this.experiencias=response;
        console.log(this.experiencias);}
      ,(error:HttpErrorResponse)=>
        {}
  );
      }
      public onAddExperiencia(addForm: NgForm): void {
        document.getElementById('add-experiencia-form').click();
        this.experienciaService.addExperiencia(addForm.value).subscribe(
          (response: Experiencia) => {
            console.log(response);
            this.getExperiencias();
            addForm.reset();
          },
          (error: HttpErrorResponse) => {
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
            console.log(error)
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
