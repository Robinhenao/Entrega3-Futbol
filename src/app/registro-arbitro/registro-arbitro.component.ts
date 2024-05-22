import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-registro-arbitro',
  standalone: true,
  imports: [RouterLink, FormsModule, HttpClientModule],
  templateUrl: './registro-arbitro.component.html',
  styleUrls: ['./registro-arbitro.component.css']
})
export class RegistroArbitroComponent {
  payloadObj: payload ;
  constructor(private http: HttpClient){
    this.payloadObj = new payload();
  }

  registerArbitro(){
    this.http.post('http://localhost:8080/api/arbitro',this.payloadObj).subscribe((res:any)=>{
      if(res.result){
        console.log(res)
        alert("registro succces")
      }
      else{
        alert(res.message)
        console.log(res)
      }
    })
  }

}
export class payload {
  nombre: string;
  apellido: string;
  identificacion: string;
  telefono: string;
  correoElectronico: string;
  contrasena: string;

  constructor() {
    this.nombre = "";
    this.apellido = "";
    this.identificacion = "";
    this.telefono = "";
    this.correoElectronico = "";
    this.contrasena = "";
  }
}
