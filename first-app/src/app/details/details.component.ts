import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  template: `
    <p>
      details works! {{housingLocationId}}
    </p>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = 0;

  constructor() { 
    this.housingLocationId = Number(this.route.snapshot.params['id'])
  }
}