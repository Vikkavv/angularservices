import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ComicsService } from './services/comics.service';
import { ComicsComponent } from './components/comics-component/comics-component';
import { provideHttpClient } from '@angular/common/http';
import { PersonasService } from './services/personas.service';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { MenuComponent } from './components/menu-component/menu-component';

@NgModule({
  declarations: [App, ComicsComponent, PersonasApiComponent, MenuComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    ComicsService,
    provideHttpClient(),
    PersonasService,
  ],
  bootstrap: [App],
})
export class AppModule {}
