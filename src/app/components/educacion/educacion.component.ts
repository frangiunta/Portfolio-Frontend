import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Educacion } from 'src/app/interfaces/Educacion';
import { EducacionService } from '../../servicios/educacion.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  public educaciones:Educacion[]=[];
  public editEducacion:Educacion;
  public deleteEducacion:Educacion;
  public educacion:Educacion;

  constructor(private educacionService:EducacionService) { }

  ngOnInit(): void {
    this.getEducaciones();
  }
public getEducaciones():void{
  this.educacionService.GetEducacion().subscribe
  (
      (response:Educacion[])=>{
        this.educaciones=response;
        console.log(this.educaciones);}
      ,(error:HttpErrorResponse)=>
        {alert(error.message)}
  );
      }
      public onAddEducacion(addForm: NgForm): void {
         document.getElementById('add-educacion-form').click();
        this.educacionService.addEducacion(addForm.value).subscribe(
          (response: Educacion) => {
            console.log(response);
            this.getEducaciones();
            addForm.reset();
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
            addForm.reset();
          }
        );
      }
    
      public onUpdateEducacion(educacion: Educacion): void {
        this.educacionService.updateEducacion(educacion).subscribe(
          (response: Educacion) => {
            console.log(response);
            this.getEducaciones();
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        );
      }
    
      public onDeleteEducacion(educacionId: number): void {
        this.educacionService.deleteEducacion(educacionId).subscribe(
          (response: void) => {
            console.log(response);
            this.getEducaciones();
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        );
      }

public onOpenModal(educacion: Educacion, mode?: string): void {
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'modal');
  
  if (mode === 'edit') {
    this.editEducacion = educacion;
    button.setAttribute('data-target', '#updateEducacion');
  }
  
  if (mode === 'add') {
    this.educacion=educacion;
    button.setAttribute('data-target', '#addEducacion');
  }

  if (mode === 'delete') {
    this.deleteEducacion = educacion;
    button.setAttribute('data-target', '#deleteEducacion');
  }
  container.appendChild(button);
  button.click();

}}

