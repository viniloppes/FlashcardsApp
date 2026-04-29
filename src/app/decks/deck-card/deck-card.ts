import { Component, input } from '@angular/core';

@Component({
  selector: 'app-deck-card',
  standalone: false,
  templateUrl: './deck-card.html',
  styleUrl: './deck-card.css',
})
export class DeckCard {
  public question = input<string>('');
  public answer = input<string>('');
  public showingAnswer = input<boolean>(false);
}
