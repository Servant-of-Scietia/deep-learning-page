import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartWindowComponent } from './start-window/start-window.component';
import { HomeWindowComponent } from './home-window/home-window.component';
import { ComputerScienceComponent } from './computer-science/computer-science.component';
import { DeepLearningComponent } from './deep-learning/deep-learning.component';
import { DeepLearningIntroductionComponent } from './deep-learning-introduction/deep-learning-introduction.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'start', component: StartWindowComponent},
  {path: '', redirectTo: '/start', pathMatch: 'full'},
  {path: 'home', component: HomeWindowComponent},
  {path: 'computer-science', component: ComputerScienceComponent},
  {path: 'deep-learning', component: DeepLearningComponent},
  {path: 'deep-learning/introduction', component: DeepLearningIntroductionComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
