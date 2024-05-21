import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormGroup,FormBuilder} from '@angular/forms';
import { CrudService } from '../../servicio/crud.service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-agregar-empleado',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterLink],
  templateUrl: './agregar-empleado.component.html',
  styleUrl: './agregar-empleado.component.css'
})

export class AgregarEmpleadoComponent  {
formularioDeEmpleados:FormGroup;

constructor(
  public formulario:FormBuilder,
  private crudService:CrudService,
  private ruteador:Router
  ){
  this.formularioDeEmpleados=this.formulario.group({
    nombre:[''],
    precio:[''],
    ///agregamos esta linea 04  //////////////////
    cupo:[''],
    contacto:[''],
    descripcion:[''],
    destino:[''],
    duracion:['']
   
  });
}
enviarDatos():any{
  console.log("me presionaste");
  console.log(this.formularioDeEmpleados.value);
  this.crudService.AgregarEmpleado(this.formularioDeEmpleados.value).subscribe(respuesta=>{
     this.ruteador.navigateByUrl('/listar-empleado');
  });
 
}
}
