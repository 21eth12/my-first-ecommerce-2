import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Laces } from './laces/laces';
import { ShoesAndBags } from './shoes-and-bags/shoes-and-bags';
import { Footer } from './footer/footer';
import { Login } from './login/login';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Laces, ShoesAndBags, Footer, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-ecommerce');
}