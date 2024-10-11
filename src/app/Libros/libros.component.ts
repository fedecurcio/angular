/* eslint-disable id-length */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LibroComponent } from '../Libro/libro.component';
import { LibrosService } from '../Services/libros.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-libros',
  imports: [CommonModule, LibroComponent, FormsModule],
  standalone : true,
  templateUrl: './libros.component.html',
})

export class LibrosComponent implements OnInit, OnDestroy
{

  libros: string[] = [];

  //librosService = inject(LibrosService);
  constructor(private librosService : LibrosService)
  {

  }

  private libroSubscription: Subscription = new Subscription;

  eliminarLibro(libro: string)
  {
    this.libros = this.libros.filter(p => p!== libro);
  }

  guardarLibro(f: { valid: any; value: { nombreLibro: string; }; })
  {
    if(f.valid)
    {
      this.librosService.agregarLibros(f.value.nombreLibro);

    }
  }

  ngOnInit(): void
  {
    this.libros = this.librosService.obtenerLibros();
    this.libroSubscription = this.librosService.librosSubject.subscribe( () =>
      {
        this.libros = this.librosService.obtenerLibros();
      });
  }

ngOnDestroy(): void
{
  this.libroSubscription.unsubscribe();
}

}
