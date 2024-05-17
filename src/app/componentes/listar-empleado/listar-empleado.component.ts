import { Component ,OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CrudService } from '../../servicio/crud.service'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-listar-empleado',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './listar-empleado.component.html',
  styleUrl: './listar-empleado.component.css'
})
export class ListarEmpleadoComponent implements OnInit {
Empleados:any;
constructor(
  private crudService:CrudService
){}
ngOnInit():void{
  this.crudService.ObtenerEmpleado().subscribe(respuesta=>{
    console.log(respuesta);
    this.Empleados=respuesta;
  })
}
borrarRegistro(id:any,iControl:any){
console.log(id);
console.log(iControl);
if(window.confirm("¿Desea borrar el registro?")){
this.crudService.borrarEmpleado(id).subscribe((respuesta)=>{
  this.Empleados.splice(iControl,1);
});
}
}
}
