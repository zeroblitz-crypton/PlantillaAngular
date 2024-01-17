import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IconsComponent } from './pages/icons/icons.component';
import { MapsComponent } from './pages/maps/maps.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { UserComponent } from './pages/user/user.component';
import { TableListComponent } from './pages/table-list/table-list.component';
import { TypographyComponent } from './pages/typography/typography.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'icons',component:IconsComponent},
  {path:'maps',component:MapsComponent},
  {path:'notifications',component:NotificationsComponent},
  {path:'user', component:UserComponent},
  {path:'table', component:TableListComponent},
  {path:'typography', component:TypographyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
