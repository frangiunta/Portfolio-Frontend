import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';import { EducacionService } from 'src/app/servicios/educacion.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './main/main.component';
import { interceptorProvider } from './interceptors/perfil-interceptor.service';
import { RouterModule } from '@angular/router';
import { PerfilService } from './servicios/perfil.service';
import { SkillsService } from './servicios/skills.service';
import { ExperienciaService } from './servicios/experiencia.service';
import { PerfilComponent } from './components/perfil/perfil.component';

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
    LoginComponent,
    RegistroComponent,
    MainComponent,PerfilComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule
  ],
  providers: [PerfilService,
    EducacionService,
    SkillsService,
    ExperienciaService,
    interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
