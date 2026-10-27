import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './components/comics-component/comics-component';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { CochesComponent } from './components/coches-component/coches-component';
import { SearchComponent } from './components/search-component/search-component';
import { PlantillaFuncionSimpleComponent } from './components/plantilla-funcion-simple-component/plantilla-funcion-simple-component';
import { PlantillaFuncionMultiple } from './components/plantilla-funcion-multiple/plantilla-funcion-multiple';

export const routes: Routes = [
  {path:"comics", component: ComicsComponent},
  {path:"personas", component: PersonasApiComponent},
  {path:"coches", component: CochesComponent},
  {path:"search/:searched", component: SearchComponent},
  {path:"plantilla", component: PlantillaFuncionSimpleComponent},
  {path:"plantillamultiple", component: PlantillaFuncionMultiple}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
