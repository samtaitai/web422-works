import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-talent-card',
  templateUrl: './talent-card.component.html',
  styleUrls: ['./talent-card.component.css'],
})
export class TalentCardComponent {
  @Input() imageUrl: string = '';
  @Input() name: string = '';
  @Input() job: string = '';
  @Input() rate: string = '';
}
