import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FleetComponent } from './pages/fleet/fleet.component';
import { UtilsGuard } from './shared/utils.guard';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth/auth.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminprevComponent } from './pages/adminprev/adminprev.component';
import { CreateUnitComponent } from './pages/adminprev/create-unit/create-unit.component';
import { UpdateFileComponent } from './pages/adminprev/update-file/update-file.component';
import { RemoveFileComponent } from './pages/adminprev/remove-file/remove-file.component';
import { BookingComponent } from './pages/booking/booking.component';

const routes: Routes = [  
  
  // LOGIN/REGISTER SECTION
  {path:'Login', title:'Login', component:AuthComponent },
  {path:'logout', title:'Login', component:LogoutComponent},
  {path:'Register', title:'Register', component:RegisterComponent },
  
  // USER SECTION
  {path:'booking', title:'Booking', component:BookingComponent },
  {path:'home', title:'Home Page', component:HomeComponent,canActivate:[UtilsGuard] },
  {path:'about',title:'About-Us',component:AboutComponent,canActivate:[UtilsGuard] },
  {path:'services', title:'Services', component:ServicesComponent,canActivate:[UtilsGuard] },
  {path:'fleet', title:'Catalog', component:FleetComponent,canActivate:[UtilsGuard] },
  {path:'contact',title:'Contact Page',component:ContactComponent,canActivate:[UtilsGuard]},
  
  
  // ADMIN SECTION
  {path:'addReservation', title:'reservation', component:AdminprevComponent },
  {path:'Admin', title:'Admin', component:AdminprevComponent,canActivate:[UtilsGuard] },
  {path:'create-file', title:'New File', component:CreateUnitComponent },
  {path:'update/:id', title:'Update-file', component:UpdateFileComponent },
  {path:'remove/:id', title:'Remove-file', component:RemoveFileComponent },

  // SYSTEM NOT FOUND / REDIRECT
  {path:'',redirectTo: '/Login',pathMatch:'full'},
  {path:'**',component:NotFoundComponent},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
