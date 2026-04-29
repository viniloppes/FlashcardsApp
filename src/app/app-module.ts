import { NgModule, NO_ERRORS_SCHEMA, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { DeckCard } from './decks/deck-card/deck-card';
import { DeckList } from './decks/deck-list/deck-list';
import { DeckProgressBar } from './decks/deck-progress-bar/deck-progress-bar';

@NgModule({
  declarations: [App, DeckCard, DeckList, DeckProgressBar],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
