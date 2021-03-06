import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'myprofile', loadChildren: './myprofile/myprofile.module#MyprofilePageModule' },
  { path: 'friends', loadChildren: './friends/friends.module#FriendsPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'helpages', loadChildren: './helpages/helpages.module#HelpagesPageModule' },
  { path: 'loginbanner', loadChildren: './loginbanner/loginbanner.module#LoginbannerPageModule' },
  { path: 'interest', loadChildren: './interest/interest.module#InterestPageModule' },
  { path: 'informations', loadChildren: './informations/informations.module#InformationsPageModule' },
  { path: 'details', loadChildren: './details/details.module#DetailsPageModule' },
  { path: 'verifiedpage', loadChildren: './verifiedpage/verifiedpage.module#VerifiedpagePageModule' },
  { path: 'bookings', loadChildren: './bookings/bookings.module#BookingsPageModule' },
  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'bookchoose', loadChildren: './bookchoose/bookchoose.module#BookchoosePageModule' },
  { path: 'bookplace', loadChildren: './bookplace/bookplace.module#BookplacePageModule' },
  { path: 'booktime', loadChildren: './booktime/booktime.module#BooktimePageModule' },
  { path: 'booktimeinfo', loadChildren: './booktimeinfo/booktimeinfo.module#BooktimeinfoPageModule' }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
