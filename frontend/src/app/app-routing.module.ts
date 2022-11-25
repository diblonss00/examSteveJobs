import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsComponent } from './chats/chats.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', 
  
  redirectTo: 'home'
  },

  {
  path: "home",
  component: HomeComponent
  
},
{
  path: "contact",
  component: ContactComponent
  
},
{
  path: "chats",
  component: ChatsComponent
  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
