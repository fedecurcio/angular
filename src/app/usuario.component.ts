import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './usuario.component.html',
})

export class UsuarioComponent
{
  usuarios = ['Pepe','Cacho','Lola'];
  usuarioNombre = 'Tito';
  visible = false;

  constructor(){
    setTimeout(() => {
      this.visible = true;
    },3000);
  }


  onAddUser(){
    this.usuarios.push(this.usuarioNombre);
  }
}
