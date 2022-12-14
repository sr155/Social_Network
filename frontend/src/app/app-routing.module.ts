import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MembersComponent } from './members/members.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path:"sidebar",component:SidebarComponent},
  {path:"home",component:HomeComponent},
  {path:"profile",component:ProfileComponent},
  {path:"members",component:MembersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
