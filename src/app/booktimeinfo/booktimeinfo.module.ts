import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BooktimeinfoPage } from './booktimeinfo.page';

const routes: Routes = [
  {
    path: '',
    component: BooktimeinfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BooktimeinfoPage]
})
export class BooktimeinfoPageModule {}
