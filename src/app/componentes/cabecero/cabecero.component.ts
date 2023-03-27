import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfiguracionServicio } from 'src/app/servicios/configuracion.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css'],
})
export class CabeceroComponent {
  isloggedIn: boolean;
  loggenInUser: string;
  permitirRegistro: boolean;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private configuracionServicio: ConfiguracionServicio
  ) {}

  ngOnInit(){
    this.loginService.getAuth().subscribe( auth=> {
      if(auth){
        this.isloggedIn = true;
        this.loggenInUser = auth.email;
      }
      else{
        this.isloggedIn = false;
      }
    });

  this.configuracionServicio.getConfiguracion().subscribe(configuracion => {
    this.permitirRegistro = configuracion.permitirRegistro;
  });
  }

  logout(){
    this.loginService.logout();
    this.isloggedIn = false;
    this.router.navigate(['/login']);
  }

}
