import { Component } from '@angular/core';
import { ContentService } from '../../services/supabase.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  providers: [ContentService],
  template: `
<div class="flex justify-center items-center gap-6 mt-10">
  <!-- Logo -->
  <img class="w-20 h-20" src="images/round-k-logo.png" alt="logo">

  <!-- Tekstboks -->
  <div class="max-w-md p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-semibold">{{ title }}</h2>
    <p class="text-blue-500 hover:text-black">{{ body }}</p>
  </div>
</div>

  `
})
export class AboutComponent {
  title = '';
  body = '';

  constructor(private service: ContentService) {
    this.loadData();
  }

  async loadData() {
    const data = await this.service.getSection('about');
    this.title = data.title;
    this.body = data.body;
  }
}
