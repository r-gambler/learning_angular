import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  template: `
   <section>
    <form>
      <input type="text" placeholder="Filter by City">
      <button class="primary" type="button">Search</button>
    </form>  
   </section>
   <section class="results">
    <app-housing-location></app-housing-location>
   </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
