import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectoriesComponent } from './directories/directories.component';
import { DirectivesComponent } from './directives/directives.component';



const routes: Routes = [{ path: 'home', component: HomeComponent},
{path: 'about', component: AboutComponent},
{path: 'dashboard', component: DashboardComponent},
{path: 'databinding' , component: DatabindingComponent},
{path: 'directories', component: DirectoriesComponent},
{path: 'directives', component: DirectivesComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
