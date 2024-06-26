import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartWindowComponent } from './start-window/start-window.component';
import { HomeWindowComponent } from './home-window/home-window.component';
import { ComputerScienceComponent } from './computer-science/computer-science.component';
import { DeepLearningComponent } from './deep-learning/deep-learning.component';
import { DeepLearningIntroductionComponent } from './deep-learning-introduction/deep-learning-introduction.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    StartWindowComponent,
    HomeWindowComponent,
    ComputerScienceComponent,
    DeepLearningComponent,
    DeepLearningIntroductionComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
