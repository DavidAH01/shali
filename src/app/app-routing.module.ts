import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from './user/auth.guard';
import {NewPostComponent} from './new-post/new-post.component'

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'newpost',
    component:NewPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SharedModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
