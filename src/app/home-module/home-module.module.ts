import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomeComponent } from './Component/home/home.component';
import { BodyImagesComponent } from './Component/body-images/body-images.component';
import { InstaComponent } from './Component/insta/insta.component';
import { SocialMediaComponent } from './Component/social-media/social-media.component';
import { TopStoriesComponent } from './Component/top-stories/top-stories.component';
import { TrendingTopicsComponent } from './Component/trending-topics/trending-topics.component';



@NgModule({
  declarations: [
    HomeComponent,
    BodyImagesComponent,
    InstaComponent,
    SocialMediaComponent,
    TopStoriesComponent,
    TrendingTopicsComponent,
  ],
  imports: [
    CommonModule,
    HomeModuleRoutingModule
  ]
})
export class HomeModuleModule { }
