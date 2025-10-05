import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ContentService } from '../../services/supabase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, NgIf],
  providers: [ContentService],
  templateUrl: './edit.component.html'
})
export class EditComponent {
  title = '';
  body = '';
  editing = true;

  constructor(private service: ContentService, private router: Router) {
    if (!localStorage.getItem('admin')) {
      this.router.navigate(['/login']); // redirect hvis ikke logget ind
    } else {
      this.loadData();
    }
  }

  async loadData() {
    const data = await this.service.getSection('about');
    this.title = data.title;
    this.body = data.body;
  }

  async save() {
    await this.service.updateSection('about', { title: this.title, body: this.body });
    alert('Gem succesfuld');
    this.router.navigate(['/']); // tilbage til AboutComponent
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
