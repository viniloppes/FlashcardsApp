import { Component, input } from '@angular/core';

@Component({
  selector: 'app-deck-progress-bar',
  standalone: false,
  templateUrl: './deck-progress-bar.html',
  styleUrl: './deck-progress-bar.css',
})
export class DeckProgressBar {
  public percentage = input<number>(0);
  public current = input<number>(0);
  public total = input<number>(0);
}
