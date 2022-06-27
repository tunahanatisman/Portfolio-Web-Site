import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaviComponent } from './common/navi/navi.component';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  {path:"",component:NaviComponent},
  {path:"",component:ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
