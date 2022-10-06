import { Component, OnInit } from '@angular/core';
import {Proyectos} from 'src/app/interfaces/Proyectos';
import { ProyectosService } from '../servicios/proyectos.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  public proyectos:Proyectos[]=[];
  public editProyectos:Proyectos;
  public deleteProyectos:Proyectos ;
  public proyecto:Proyectos;

    constructor(private proyectosService:ProyectosService) { }
  
    ngOnInit(): void {
      this.getProyectos();
    }
  
    public getProyectos():void{
      this.proyectosService.GetProyecto().subscribe
      (
          (response:Proyectos[])=>{
            this.proyectos=response;
            console.log(this.proyectos);}
          ,(error:HttpErrorResponse)=>
            {alert(error.message)}
      );
          }
  
          public onAddProyecto(addForm: NgForm): void {
            document.getElementById('add-experiencia-form').click();
            this.proyectosService.addProyecto(addForm.value).subscribe(
              (response: Proyectos) => {
                console.log(response);
                this.getProyectos();
                addForm.reset();
              },
              (error: HttpErrorResponse) => {
                alert(error.message);
                addForm.reset();
              }
            );
          }
        
          public onUpdateProyecto(proyecto: Proyectos): void {
            this.proyectosService.updateProyecto(proyecto).subscribe(
              (response: Proyectos) => {
                console.log(response);
                this.getProyectos();
              },
              (error: HttpErrorResponse) => {
                alert(error.message);
              }
            );
          }
        
          public onDeleteProyecto(proyectoId: number): void {
            this.proyectosService.deleteProyecto(proyectoId).subscribe(
              (response: void) => {
                console.log(response);
                this.getProyectos();
              },
              (error: HttpErrorResponse) => {
                alert(error.message);
              }
            );
          }
    
    public onOpenModal(proyecto: Proyectos, mode?: string): void {
      const container = document.getElementById('main-container');
      const button = document.createElement('button');
      button.type = 'button';
      button.style.display = 'none';
      button.setAttribute('data-toggle', 'modal');
      
      if (mode === 'edit') {
        this.editProyectos = proyecto;
        button.setAttribute('data-target', '#updateProyecto');
      }
      
      if (mode === 'add') {
        this.proyecto=proyecto;
        button.setAttribute('data-target', '#addProyecto');
      }
    
      if (mode === 'delete') {
        this.deleteProyectos = proyecto;
        button.setAttribute('data-target', '#deleteProyecto');
      }
      container.appendChild(button);
      button.click();
    }}
        