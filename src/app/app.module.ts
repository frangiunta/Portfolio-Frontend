import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RedesComponent } from './toolbar/redes/redes.component';
import { BannerAPComponent } from './toolbar/banner/banner-ap/banner-ap.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { BannerComponent } from './banner/banner.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';
import { UsuarioService } from './perfil/usuario.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ExperienciaService } from './experiencia/experiencia.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    RedesComponent,
    BannerAPComponent,
    PerfilComponent,
    ExperienciaComponent,
    EducacionComponent,
    BannerComponent,
    SkillsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [UsuarioService,ExperienciaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
