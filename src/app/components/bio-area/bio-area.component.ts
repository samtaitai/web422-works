import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bio-area',
  templateUrl: './bio-area.component.html',
  styleUrls: ['./bio-area.component.css'],
})
export class BioAreaComponent {
  @Input() name: string = '';
  @Input() job: string = '';
  @Input() bio: string = '';
}
