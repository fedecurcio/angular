import {Subject} from 'rxjs';

export class LibrosService
{
  private libros = ['On The Road', 'Howl','Starting From San Francisco', 'The Dharma Bums'];
  public librosSubject = new Subject<void>();

  agregarLibros(libroNombre : string)
  {
    this.libros.push(libroNombre);
    this.librosSubject.next();
  }

  eliminarLibro(nombreLibro : string)
  {
    this.libros = this.libros.filter(xi => xi !== nombreLibro);
    this.librosSubject.next();
  }

  obtenerLibros()
  {
    return [...this.libros];
  }
}
