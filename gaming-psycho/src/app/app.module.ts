import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatsComponent } from './chats/chats.component';
import { CommunitiesComponent } from './communities/communities.component';
import { NewsComponent } from './news/news.component';
import { StreamsComponent } from './streams/streams.component';
import { GamesComponent } from './games/games.component';
import { NewsArticleComponent } from './news-article/news-article.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { AmericantrucksimulatorComponent } from './americantrucksimulator/americantrucksimulator.component';
import { Persona5streamComponent } from './persona5stream/persona5stream.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    ChatsComponent,
    CommunitiesComponent,
    NewsComponent,
    StreamsComponent,
    GamesComponent,
    NewsArticleComponent,
    AuthorizationComponent,
    AmericantrucksimulatorComponent,
    Persona5streamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
