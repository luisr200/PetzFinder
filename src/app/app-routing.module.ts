import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PetComponent } from './pet/pet.component';
import { TagComponent } from './tag/tag.component';
import { CallbackComponent } from './callback/callback.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pet/:id', component: PetComponent },
  { path: 'tags/:id', component: TagComponent },
  { path: 'callback', component: CallbackComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
