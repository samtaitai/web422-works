import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() buttonText: string = '';
  @Input() backgroundColor: string = '';
}
