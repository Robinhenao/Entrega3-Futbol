import { Routes } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { RegistroArbitroComponent } from './registro-arbitro/registro-arbitro.component';
import { PartidoComponent } from './partido/partido.component';
import { EquipoComponent } from './equipo/equipo.component';
import { RegistroJugadorComponent } from './registro-jugador/registro-jugador.component';
import { NuevoPartidoComponent } from './nuevo-partido/nuevo-partido.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';

export const routes: Routes = [
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', component: LoginComponent},
    {path:'registro_jugador', component: RegistroJugadorComponent},
    {path:'registro_arbitro', component: RegistroArbitroComponent},
    {path:'partido', component: NuevoPartidoComponent},
    {path:'equipo', component: EquipoComponent},
    {path:'recuperar_contrasena', component: RecuperarContrasenaComponent},
    
];
