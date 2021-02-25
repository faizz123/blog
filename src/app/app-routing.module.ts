import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = 
[
  {path:'',component:UsersComponent},
  {path:'post/:userId',component:PostsComponent},
  {path:'postDetail/:postId',component:PostdetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
