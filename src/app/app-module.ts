import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routes } from './app-routing-module';
import { App } from './app';
import { ComicsService } from './services/comics.service';
import { ComicsComponent } from './components/comics-component/comics-component';
import { provideHttpClient } from '@angular/common/http';
import { PersonasService } from './services/personas.service';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { CochesService } from './services/coches.service';
import { CochesComponent } from './components/coches-component/coches-component';
import { SearchComponent } from './components/search-component/search-component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PlantillaFuncionSimpleComponent } from './components/plantilla-funcion-simple-component/plantilla-funcion-simple-component';
import { FormsModule } from '@angular/forms';
import { PlantillaService } from './services/plantilla.service';
import { PlantillaFuncionMultiple } from './components/plantilla-funcion-multiple/plantilla-funcion-multiple';

@NgModule({
  declarations: [
    App,
    ComicsComponent,
    PersonasApiComponent,
    MenuComponent,
    CochesComponent,
    SearchComponent,
    PlantillaFuncionSimpleComponent,
    PlantillaFuncionMultiple,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    PersonasService,
    ComicsService,
    CochesService,
    PlantillaService,
  ],
  bootstrap: [App],
})
export class AppModule {}
