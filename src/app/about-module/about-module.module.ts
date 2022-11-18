import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutModuleRoutingModule } from './about-module-routing.module';
import { AboutComponent } from './Component/about/about.component';
import { BgImgComponent } from './Component/bg-img/bg-img.component';
import { InstaComponent } from './Component/insta/insta.component';
import { ParagraphComponent } from './Component/paragraph/paragraph.component';


@NgModule({
  declarations: [
    AboutComponent,
    BgImgComponent,
    InstaComponent,
    ParagraphComponent
  ],
  imports: [
    CommonModule,
    AboutModuleRoutingModule
  ]
})
export class AboutModuleModule { }
