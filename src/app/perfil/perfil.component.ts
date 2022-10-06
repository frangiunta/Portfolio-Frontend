import { Component, OnInit } from '@angular/core';
import { Usuario} from 'src/app/interfaces/Usuario';
import { UsuarioService} from '../servicios/usuario.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  public usuarios:Usuario[]=[];

  public editUsuario:Usuario;

  constructor(private usuarioService:UsuarioService) {
    
  }
 
    ngOnInit(): void {
        this.getUsuarios();
    }

    public getUsuarios(): void {
      this.usuarioService.GetUsuarios().subscribe(
        (response: Usuario[]) => {
          this.usuarios = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  
    public onUpdateUsuario(usuario: Usuario): void {
      this.usuarioService.updateUsuario(usuario).subscribe(
        (response: Usuario) => {
          console.log(response);
          this.getUsuarios();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  
    public onOpenModal(usuario: Usuario, mode: String): void {
      const container = document.getElementById('main-container');
      const button = document.createElement('button');
      button.type = 'button';
      button.style.display = 'none';
      button.setAttribute('data-toggle', 'modal');
      if (mode === 'edit'){
        this.editUsuario = usuario;
        button.setAttribute('data-target', '#updateEmployeeModal');
      }
      container?.appendChild(button);
      button.click();
    }
  
  
}
