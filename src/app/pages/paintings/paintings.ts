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
      size: '50x70 cm',
      price: 1500,
      materials: 'Akryl på lærred',
      image: 'images/paintings/vrede.jpg',
    },
        {
      title: 'Lytten',
      size: 'A4',
      price: 200,
      materials: 'Oliekridt på papir',
      image: 'images/paintings/IMG_8320.jpg',
    },
            {
      title: 'Forbavselse',
      size: 'A4',
      price: 200,
      materials: 'Oliekridt på papir',
      image: 'images/paintings/IMG_8319.jpg',
    },
                {
      title: 'Kontemplation',
      size: 'A4',
      price: 200,
      materials: 'Oliekridt på papir',
      image: 'images/paintings/IMG_8322.jpg',
    },

  ];

}

