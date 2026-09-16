import { Component } from '@angular/core';
import { SelectColor } from '../select-color/select-color';

@Component({
  selector: 'app-shoes-and-bags',
  standalone: true,
  imports: [SelectColor],
  templateUrl: './shoes-and-bags.html',
  styleUrl: './shoes-and-bags.css'
})
export class ShoesAndBags {
  productName = 'Shoes & Bags';
}