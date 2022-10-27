import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainComponent } from './main/main.component';
import { AuthService } from './servicios/auth.service';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'**',component:MainComponent},
  {path:'login',component:LoginComponent},
  {path:'toolbar',component:ToolbarComponent},
  {path:'educacion',component:EducacionComponent},
  {path:'skills',component:SkillsComponent},
  {path:'experiencia',component:ExperienciaComponent},
  {path:'proyectos',component:ProyectosComponent}
  ,{path:'registro',component:RegistroComponent},
  {path:'perfil',component:PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule],providers: [AuthService]
})
export class AppRoutingModule { }
