import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { PerfilService } from '../servicios/perfil.service';
import { Perfil } from '../interfaces/Perfil';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public perfiles:Perfil[]=[];

  public editPerfil:Perfil;

  constructor(private perfilService:PerfilService) { }

  ngOnInit(): void {
    this.getPerfiles();
}


public getPerfiles(): void {
  this.perfilService.GetPerfil().subscribe(
    (response: Perfil[]) => {
      this.perfiles = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}

public onUpdatePerfil(perfil: Perfil): void {
  this.perfilService.updatePerfil(perfil).subscribe(
    (response: Perfil) => {
      console.log(response);
      this.getPerfiles();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}

public onOpenModal(perfil: Perfil, mode: String): void {
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'modal');
  if (mode === 'edit'){
    this.editPerfil = perfil;
    button.setAttribute('data-target', '#updateEmployeeModal');
  }
  container?.appendChild(button);
  button.click();
}


}
