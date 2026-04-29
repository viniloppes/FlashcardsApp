import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeckCard } from './decks/deck-card/deck-card';
import { DeckList } from './decks/deck-list/deck-list';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'decks',
    pathMatch: 'full'
  },
  {
    path: 'decks',
    component: DeckList
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
