import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RestsearchComponent } from './restaurant/components/home/restsearch/restsearch.component';
import { RestlistComponent } from './restaurant/components/home/restlist/restlist.component';
import { FavrestlistComponent } from './restaurant/components/fav/favrestlist/favrestlist.component';
import { FavrestComponent } from './restaurant/components/fav/favrestlist/favrest/favrest.component';
import { RestComponent } from './restaurant/components/home/restlist/rest/rest.component';
import { MoviesearchComponent } from './movie/components/home/moviesearch/moviesearch.component';
import { MovielistComponent } from './movie/components/home/movielist/movielist.component';
import { FavmovielistComponent } from './movie/components/fav/favmovielist/favmovielist.component';
import { FavmovieComponent } from './movie/components/fav/favmovielist/favmovie/favmovie.component';
import { MovieComponent } from './movie/components/home/movielist/movie/movie.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { FavnewslistComponent } from './news/components/fav/favnewslist/favnewslist.component';
import { FavnewsComponent } from './news/components/fav/favnewslist/favnews/favnews.component';
import { NewslistComponent } from './news/components/home/newslist/newslist.component';
import { NewssearchComponent } from './news/components/home/newssearch/newssearch.component';
import { NewsComponent } from './news/components/home/newslist/news/news.component';
import { FavtemplistComponent } from './temp/components/fav/favtemplist/favtemplist.component';
import { FavtempComponent } from './temp/components/fav/favtemplist/favtemp/favtemp.component';
import { TemplistComponent } from './temp/components/home/templist/templist.component';
import { TempsearchComponent } from './temp/components/home/tempsearch/tempsearch.component';
import { TempComponent } from './temp/components/home/templist/temp/temp.component';
import { RestaurantService } from './services/restaurant.service';
import { ComponentsComponent } from './restaurant/components/components.component';

const routes: Routes = [
  { path: '', redirectTo: '/restaurant', pathMatch: 'full' },
  { path: 'restaurant', component: ComponentsComponent },
  { path: 'restFav', component: FavrestlistComponent },
  { path: 'movie', component: MoviesearchComponent },
  { path: 'news', component: NewssearchComponent },
  { path: 'temp', component: TempsearchComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RestsearchComponent,
    RestlistComponent,
    FavrestlistComponent,
    FavrestComponent,
    RestComponent,
    MoviesearchComponent,
    MovielistComponent,
    FavmovielistComponent,
    FavmovieComponent,
    MovieComponent,
    HeaderComponent,
    FooterComponent,
    FavnewslistComponent,
    FavnewsComponent,
    NewslistComponent,
    NewssearchComponent,
    NewsComponent,
    FavtemplistComponent,
    FavtempComponent,
    TemplistComponent,
    TempsearchComponent,
    TempComponent,
    ComponentsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
