import { Routes } from '@angular/router';
import { AgregarEmpleadoComponent } from './componentes/agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './componentes/editar-empleado/editar-empleado.component';
import { ListarEmpleadoComponent } from './componentes/listar-empleado/listar-empleado.component';


export const routes: Routes = [
    {path:'',redirectTo:'agregar-empleado',pathMatch:'full' },
    {path:'agregar-empleado',component:AgregarEmpleadoComponent},
    {path:'editar-empleado/:id',component:EditarEmpleadoComponent},
    {path:'listar-empleado',component:ListarEmpleadoComponent}
];
