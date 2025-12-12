import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: 'contact.css'
})
export class Contact {

formData = {
  name: '',
  email: '',
  message: ''
};

onSubmit(event: Event) {
  event.preventDefault();

  const form = new FormData();
  form.append('name', this.formData.name);
  form.append('email', this.formData.email);
  form.append('message', this.formData.message);

  // fetch('https://formsubmit.co/9454a5479bc5522f80a555e7ad568e16', {
  //   method: 'POST',
  //   body: form,
  //   headers: {
  //     'Accept': 'application/json'
  //   }
  // })
  // .then(response => {
  //   if (response.ok) {
      alert('Formularen sender ikke beskeder. Det er kun et eksempel.');
  //     this.formData = { name: '', email: '', message: '' }; // nulstil formular
  //   } else {
  //     alert('Noget gik galt. Prøv igen.');
  //   }
  // })
  // .catch(() => alert('Netværksfejl'));
}

}
