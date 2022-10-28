import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';
import { Perfil } from 'src/app/interfaces/Perfil';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public perfiles:Perfil[]=[];
  public editPerfil:Perfil;
  public perfil:Perfil;
  roles: string[] = [];
  isAdmin = false;


  constructor(private perfilservice: PerfilService, private tokenService: TokenService){}

  ngOnInit(): void {
    this.GetPerfiles();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(role => {
      if (role === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  public GetPerfiles():void{
    this.perfilservice.GetPerfil().subscribe
    (
        (response:Perfil[])=>{
          this.perfiles=response;
          console.log(this.perfiles);}
        ,(error:HttpErrorResponse)=>
          {}
    );
        }


public onUpdatePerfil(perfil: Perfil): void {
  this.perfilservice.updatePerfil(perfil).subscribe(
    (response: Perfil) => {
      console.log(response);
      this.GetPerfiles();
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

onLogOut(): void {
  this.tokenService.logOut();
  window.location.reload();
}



}
