import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MlImagesComponent } from './component/ml-images/ml-images.component';


const routes: Routes = [
  { path: '', component: MlImagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
