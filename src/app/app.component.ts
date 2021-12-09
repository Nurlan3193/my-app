import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
export interface Card {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggle = true

cards: Card[] = [
  {title: 'Card 1', text: 'This is number one'},
  {title: 'This is Card 2', text: 'This is card number 2'},
  {title: 'Last card!', text: 'This is card number 3'}
]

  toggleCards() {
this.toggle = !this.toggle
  }
}
