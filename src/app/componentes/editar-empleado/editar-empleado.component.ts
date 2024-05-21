import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { CrudService } from '../../servicio/crud.service';
import {FormGroup,FormBuilder} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Empleado } from '../../servicio/empleado';

@Component({
  selector: 'app-editar-empleado',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterLink],
  templateUrl: './editar-empleado.component.html',
  styleUrl: './editar-empleado.component.css'
})
export class EditarEmpleadoComponent {
elID:any;
formularioDeEmpleados:FormGroup;
constructor(
private activeRoute:ActivatedRoute,
private crudService:CrudService,
public formulario:FormBuilder,
private ruteador:Router
){
  this.elID=this.activeRoute.snapshot.paramMap.get('id');
  console.log(this.elID);
  this.crudService.obtenerUnEmpleado(this.elID).subscribe(
    respuesta=>{
      console.log(respuesta);
      this.formularioDeEmpleados.setValue({
        nombre:respuesta[0]['nombre'],
        precio:respuesta[0]['precio'],
        cupo:respuesta[0]['cupo'],
        contacto:respuesta[0]['contacto'],
        descripcion:respuesta[0]['descripcion'],
        destino:respuesta[0]['destino'],
        duracion:respuesta[0]['duracion'],
       
      });
    }
  );
  this.formularioDeEmpleados=this.formulario.group({
    nombre:[''],
    precio:[''],
    cupo:[''],
    contacto:[''],
    descripcion:[''],
    destino:[''],
    duracion:['']
  
  });
}

enviarDatos():any{
  console.log(this.elID);
  console.log(this.formularioDeEmpleados.value);
  this.crudService.editarEmpleado(this.elID,this.formularioDeEmpleados.value).subscribe(()=>{
  
  this.ruteador.navigateByUrl('/listar-empleado');
  });
}
}
