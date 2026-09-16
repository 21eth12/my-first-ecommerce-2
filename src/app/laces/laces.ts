import { Component } from '@angular/core';
import { SelectColor } from '../select-color/select-color';

@Component({
  selector: 'app-laces',
  standalone: true,
  imports: [SelectColor],
  templateUrl: './laces.html',
  styleUrl: './laces.css'
})
export class Laces {
  productName = 'West African Lace';
}