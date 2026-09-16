import { Component } from '@angular/core';

@Component({
  selector: 'app-select-color',
  standalone: true,
  templateUrl: './select-color.html',
  styleUrl: './select-color.css'
})
export class SelectColor {
  colors: string[] = ['Black', 'White', 'Brown', 'Red', 'Blue', 'Green', 'Gold', 'Silver'];
}