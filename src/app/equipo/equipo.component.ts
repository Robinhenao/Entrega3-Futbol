import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

interface Jugador {
  id: number;
  nombre: string;
  apellido: string;
  identificacion: string;
  telefono: string;
  correoElectronico: string;
}

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  jugadores: Jugador[] = [];
  jugadoresSeleccionados: Jugador[] = [];
  nombreEquipo: string = '';
  estadoEquipo: boolean = true;

  private apiUrl = 'http://localhost:8080/api';

  constructor(
    private http: HttpClient,
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    this.cargarJugadores();
  }

  cargarJugadores() {
    this.http.get<Jugador[]>(`${this.apiUrl}/jugador`).subscribe(
      data => this.mostrarJugadores(data),
      error => console.error('Error al cargar jugadores', error)
    );
  }

  mostrarJugadores(jugadores: Jugador[]) {
    this.jugadores = jugadores;
    const selectElement = this.el.nativeElement.querySelector('#jugadores-select');
    jugadores.forEach(jugador => {
      const option = this.renderer.createElement('option');
      const text = this.renderer.createText(`${jugador.nombre} ${jugador.apellido}`);
      this.renderer.setProperty(option, 'value', jugador.id);
      this.renderer.appendChild(option, text);
      this.renderer.appendChild(selectElement, option);
    });
  }

  agregarJugador() {
    const selectElement = this.el.nativeElement.querySelector('#jugadores-select');
    const jugadorId = +selectElement.value;
    const jugadorSeleccionado = this.jugadores.find(jugador => jugador.id === jugadorId);
    if (jugadorSeleccionado && !this.jugadoresSeleccionados.includes(jugadorSeleccionado)) {
      this.jugadoresSeleccionados.push(jugadorSeleccionado);
      this.mostrarJugadoresSeleccionados();
    }
  }

  mostrarJugadoresSeleccionados() {
    const listaElement = this.el.nativeElement.querySelector('#jugadores-lista');
    this.renderer.setProperty(listaElement, 'innerHTML', ''); // Clear the list
    this.jugadoresSeleccionados.forEach(jugador => {
      const option = this.renderer.createElement('option');
      const text = this.renderer.createText(`${jugador.nombre} ${jugador.apellido}`);
      this.renderer.setProperty(option, 'value', jugador.id);
      this.renderer.appendChild(option, text);
      this.renderer.appendChild(listaElement, option);
    });
  }

  guardarEquipo() {
    const equipoData = {
      nombre: this.nombreEquipo,
      estado: this.estadoEquipo,
      idsJugadores: this.jugadoresSeleccionados.map(jugador => jugador.id)
    };

    this.http.post(`${this.apiUrl}/equipo`, equipoData).subscribe(
      response => {
        console.log('Equipo guardado exitosamente', response);
        alert('Equipo guardado exitosamente');
        this.resetForm();
      },
      error => {
        console.error('Error al guardar equipo', error);
      }
    );
  }

  resetForm() {
    this.nombreEquipo = '';
    this.estadoEquipo = true;
    this.jugadoresSeleccionados = [];
    const listaElement = this.el.nativeElement.querySelector('#jugadores-lista');
    this.renderer.setProperty(listaElement, 'innerHTML', ''); // Limpiar la lista de jugadores seleccionados
  }
}
