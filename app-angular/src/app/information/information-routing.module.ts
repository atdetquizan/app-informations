import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InformationComponent } from './information.component';

const routes = [
  {
    path: '',
    component: InformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationRoutingModule { }
