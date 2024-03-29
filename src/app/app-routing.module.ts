import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { EditarClienteComponent } from './componentes/editar-cliente/editar-cliente.component';
import { LoginComponent } from './componentes/login/login.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { AuthGuard } from './guardianes/authguard';
import { configuracionGuard } from './guardianes/configuracion.guard';

//Aqui se almacenan las Rutas que tendra la pagina web
const routes: Routes = [
  {path : '', component: TableroComponent, canActivate: [AuthGuard]},
  {path : 'login', component: LoginComponent},
  {path : 'registrarse', component: RegistroComponent, canActivate: [configuracionGuard]},
  {path : 'configuracion', component: ConfiguracionComponent, canActivate: [AuthGuard]},
  {path : 'cliente/editar/:id', component: EditarClienteComponent, canActivate: [AuthGuard]},
  {path : '**', component: NoEncontradoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
