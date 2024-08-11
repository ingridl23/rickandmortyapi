import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  { path:'',
    redirectTo : 'home',
    pathMatch:'full',
  },
    {path: 'home', component :HomeComponent},
    { path:'users', component : UserlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
