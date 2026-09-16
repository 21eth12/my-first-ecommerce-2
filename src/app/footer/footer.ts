import { Component } from '@angular/core';
import { NgClass, NgStyle, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgClass, NgStyle, UpperCasePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  categoriesHeader = 'categories';
  quickLinksHeader = 'quick links';
  newsletterHeader = 'get the newsletter';

  categories: string[] = [
    'Laces', 'Wax Prints', 'Shoes & Bags', 'Vlisco',
    'Getzner', 'Swiss Voile', 'Head Gear', 'Brocade', 'Specials'
  ];

  quickLinks: string[] = [
    'About Empire Textiles', 'Contact Us', 'Testimonials', "FAQ's",
    'Shipping Details', 'Uniforms', 'Blog', 'Create Wholesale Account',
    'Terms & Conditions', 'Privacy Policy'
  ];

  footerBg = '#8B0000';
  isBrandColumn = true;
}