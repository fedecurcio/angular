import { Component } from '@angular/core';
import { LibrosComponent } from './Libros/libros.component'
import { RouterModule } from '@angular/router'
import { LibrosService } from './Services/libros.service'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LibrosComponent, RouterModule],
  providers:[LibrosService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-starter';
}
