import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule],
  template: `
    <main>
      <header class="brand-name">
      <h1>Home</h1>
      <img class="brand-logo" src = "/assets/logo.svg" alt="logo" aria- hidden="true" >
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-app';
}
