// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { TabsPage } from './tabs.page';

// const routes: Routes = [
//   {
//     path: 'home',
//     component: TabsPage,
//     children: [
//       {
//         path: 'home',
//         children: [
//           {
//             path: '',
//             loadChildren: () =>
//               import('../home/home.module').then(m => m.HomePageModule)
//           }
//         ]
//       },
//       {
//         path: 'chat',
//         children: [
//           {
//             path: '',
//             loadChildren: () =>
//               import('../chat/chat.module').then(m => m.ChatPageModule)
//           }
//         ]
//       },
//       {
//         path: 'myprofile',
//         children: [
//           {
//             path: '',
//             loadChildren: () =>
//               import('../myprofile/myprofile.module').then(m => m.MyprofilePageModule)
//           }
//         ]
//       },
//       {
//         path: 'settings',
//         children: [
//           {
//             path: '',
//             loadChildren: () =>
//               import('../settings/settings.module').then(m => m.SettingsPageModule)
//           }
//         ]
//       },
//       {
//         path: '',
//         redirectTo: '/home/home',
//         pathMatch: 'full'
//       }
//     ]
//   },
//   {
//     path: '',
//     redirectTo: '/home/home',
//     pathMatch: 'full'
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class TabsPageRoutingModule {}
