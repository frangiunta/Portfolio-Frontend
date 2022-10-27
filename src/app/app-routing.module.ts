import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { PerfilGuardService as guard } from './guards/perfil-guard.service';
import { PerfilComponent } from './perfil/perfil.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SkillsComponent } from './skills/skills.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const routes: Routes = [
{path:'inicio',component: ToolbarComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
{path:'login', component: LoginComponent },
{path:'registro',component:RegistroComponent},
{path:'perfil',component:PerfilComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user']}},
{path:'educacion',component:EducacionComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
{path:'experiencia',component:ExperienciaComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
{path:'skills',component:SkillsComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
{path:'proyectos',component:ProyectosComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
{ path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
