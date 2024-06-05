import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


interface Equipo {
  idEquipo: number;
  nombre: string;
  estado: boolean;
}

interface Arbitro {
  idArbitro: number;
  nombre: string;
  apellido: string;
  identificacion: string;
  telefono: string;
  correoElectronico: string;
}

@Component({
  selector: 'app-nuevo-partido',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './nuevo-partido.component.html',
  styleUrls: ['./nuevo-partido.component.css']
})
export class NuevoPartidoComponent implements OnInit {
  equipos: Equipo[] = [];
  arbitros: Arbitro[] = [];

  selectedEquipo1: number=0; 
  selectedEquipo2: number=0;
  selectedArbitro: number=0;
  fecha: string = '';
  hora: string = '';
  lugar: string = '';
  apuesta: boolean = true;

  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.cargarEquipos();
    this.cargarArbitros();
  }

  cargarEquipos() {
    this.http.get<Equipo[]>(`${this.apiUrl}/equipo`).subscribe(
      data => {
        this.equipos = data;
      },
      error => {
        console.error('Error al cargar equipos', error);
      }
    );
  }

  cargarArbitros() {
    this.http.get<Arbitro[]>(`${this.apiUrl}/arbitro`).subscribe(
      data => {
        this.arbitros = data;
      },
      error => {
        console.error('Error al cargar árbitros', error);
      }
    );
  }

  guardarPartido() {
    const partido = {
      equipo1: this.selectedEquipo1,
      equipo2: this.selectedEquipo2,
      arbitro: this.selectedArbitro,
      fechaInicio: this.combinarFechaYHora(),
      lugar: this.lugar,
      apuesta: this.apuesta,
      estado: "funcionando"
    };

    this.http.post(`${this.apiUrl}/partido`, partido).subscribe(
      response => {
        console.log('Partido guardado correctamente', response);
        alert('Partido guardado exitosamente');
      },
      error => {
        console.error('Error al guardar partido', error);
      }
    );
  }

  private combinarFechaYHora(): string {
    // Formatea fecha y hora en formato ISO8601 (YYYY-MM-DDTHH:mm:ss)
    const fechaHoraISO = `${this.fecha}T${this.hora}:00`;
    return fechaHoraISO;
  }

}

