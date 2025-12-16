import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-paintings',
  imports: [CommonModule],
  templateUrl: './paintings.html',
  styles: ``,
})
export class Paintings {
  user = 'klmassesson';
  domain = 'gmail.com';

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
      title: 'Kvinde i rødt',
      size: '40x80cm',
      price: 1650,
      materials: 'Akryl på lærred',
      image: 'images/paintings/IMG_8346.jpg',
    },
    {
      title: 'Birk i blå',
      size: '18x24cm',
      price: 350,
      materials: 'Akryl på lærred',
      image: 'images/paintings/IMG_8344.jpg',
    },
    {
      title: 'Sommerfarvet kornmark',
      size: '',
      price: 500,
      materials: 'Akryl på lærred',
      image: 'images/paintings/IMG_8345.jpg',
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
        {
      title: 'Rød',
      size: 'A4',
      price: 200,
      materials: 'Oliekridt på papir',
      image: 'images/paintings/IMG_8337.jpg',
    },
        {
      title: 'Gul',
      size: 'A4',
      price: 200,
      materials: 'Oliekridt på papir',
      image: 'images/paintings/IMG_8338.jpg',
    },
        {
      title: 'Blå',
      size: 'A4',
      price: 200,
      materials: 'Oliekridt på papir',
      image: 'images/paintings/IMG_8340.jpg',
    },
            {
      title: 'Vandfald',
      size: 'A5',
      price: 150,
      materials: 'Oliekridt på papir',
      image: 'images/paintings/IMG_8341.jpg',
    },
  ];
}
