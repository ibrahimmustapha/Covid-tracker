import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashcard',
  templateUrl: './dashcard.component.html',
  styleUrls: ['./dashcard.component.scss'],
})
export class DashcardComponent {
  @Input() country = '';
  @Input() active = '';
}
