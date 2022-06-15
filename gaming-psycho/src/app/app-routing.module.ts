import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChatsComponent } from './chats/chats.component';
import { CommunitiesComponent } from './communities/communities.component';
import { GamesComponent } from './games/games.component';
import { NewsComponent } from './news/news.component';
import { ProfileComponent } from './profile/profile.component';
import { StreamsComponent } from './streams/streams.component';


const routes: Routes = [
  {path: 'chats', component: ChatsComponent},
  {path: 'communities', component: CommunitiesComponent},
  {path: 'games', component: GamesComponent},
  {path: 'news', component: NewsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'streams', component: StreamsComponent},
  {path: '', redirectTo: 'profile', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
