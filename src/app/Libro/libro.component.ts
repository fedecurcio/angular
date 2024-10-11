import { Component, Input, EventEmitter, Output  } from '@angular/core';
import { LibrosService } from '../Services/libros.service';

@Component({
  selector : 'app-libro',
  standalone: true,
  templateUrl : './libro.component.html',
  styleUrls : ['./libro.component.css']
})

export class LibroComponent {
  @Input()
  tituloLibro!: string;

  @Output() libroClicked = new EventEmitter();

  constructor(private librosService : LibrosService)
  {

  }

  onClick()
  {
    //this.libroClicked.emit();
    this.librosService.eliminarLibro(this.tituloLibro);
  }
}
