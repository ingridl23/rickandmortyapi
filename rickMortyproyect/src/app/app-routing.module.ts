import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  { path:'',
    redirectTo : 'home',
    pathMatch:'full',
  },
    {path: 'home', component :AppComponent},
    { path:'users', component : UserlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
