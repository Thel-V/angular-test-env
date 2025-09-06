import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TheBlob } from './components/the-blob/the-blob';

@Component({
  selector: 'app-root',
  imports: [FontAwesomeModule, RouterOutlet, Header, Footer, TheBlob],
  template: `
    <app-header />
    <main>
      <router-outlet />
    </main>
    <app-footer />
    <app-the-blob />
  `,
  styles: [],
})
export class App {
  
}