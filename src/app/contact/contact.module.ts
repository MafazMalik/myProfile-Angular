import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { NewComponent } from './Component/new/new.component';
import { BgContactComponent } from './Component/bg-contact/bg-contact.component';
import { InstaComponent } from './Component/insta/insta.component';
import { ParaContactComponent } from './Component/para-contact/para-contact.component';


@NgModule({
  declarations: [
    NewComponent,
    BgContactComponent,
    InstaComponent,
    ParaContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
