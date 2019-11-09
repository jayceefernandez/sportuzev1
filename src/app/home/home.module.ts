import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';


const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

// const routes: Routes = [
//   {
//     path: 'home',
//     component: HomePage,
//     children:[
//         { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
//         { path: 'myprofile', loadChildren: './myprofile/myprofile.module#MyprofilePageModule' },
//         { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' }
//     ]
//   },
//   {
//     path:'home',
//     redirectTo:'home',
//     pathMatch:'full'
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
