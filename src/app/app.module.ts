import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { BannerComponent } from './banner/banner.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';
import { ExperienciaService } from './servicios/experiencia.service';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { SkillsService } from 'src/app/servicios/skills.service';
import { ProyectosService } from './servicios/proyectos.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,

    ExperienciaComponent,
    EducacionComponent,
    BannerComponent,
    SkillsComponent,
    FooterComponent,
    ProyectosComponent,
    ToolbarComponent,
    PerfilComponent,
    LoginComponent,
    RegistroComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule, BrowserAnimationsModule,MatProgressBarModule,MatButtonModule,MatCardModule,MatToolbarModule,MatGridListModule
  ],
  providers: [ExperienciaService,EducacionService,SkillsService,ProyectosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
