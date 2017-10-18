import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RedditBodyComponent } from './reddit-body/reddit-body.component';
import { RedditArticleComponent } from './reddit-body/reddit-article/reddit-article.component';

@NgModule({
  declarations: [
    AppComponent,
    RedditBodyComponent,
    RedditArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
