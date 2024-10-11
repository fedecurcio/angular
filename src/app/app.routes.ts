import { Routes } from '@angular/router';
import { InicioComponent } from './inicio.component'
import { LibrosComponent } from './Libros/libros.component'

export const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'libros', component: LibrosComponent}
];
