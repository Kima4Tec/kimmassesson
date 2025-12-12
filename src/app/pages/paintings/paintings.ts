import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-paintings',
  imports: [CommonModule],
  templateUrl: './paintings.html',
  styles: ``
})
export class Paintings {

  user = "klmassesson";
  domain = "gmail.com";

  get email(): string {
    return `${this.user}@${this.domain}`;
  }

  paintings = [
    {
      title: 'Vrede',
      size: '50x70',
      price: 1500,
      materials: 'Akryl på lærred',
      image: 'images/paintings/vrede.jpg',
    },

  ];

}

