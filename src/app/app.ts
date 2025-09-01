import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Start } from './components/start/start';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Start], 
  template: `
    <router-outlet />
    <app-header />
    <app-start />
    <app-footer />
  `,
  styles: [],
})
export class App {
  
}
