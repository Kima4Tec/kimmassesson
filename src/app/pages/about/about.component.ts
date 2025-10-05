import { Component } from '@angular/core';
import supabase from '../../services/supabase.client';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <div class="flex justify-center items-center gap-6 mt-10">
      <img class="w-20 h-20" src="images/round-k-logo.png" alt="logo">
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

  constructor() {
    this.loadData();
  }

async loadData() {
  const { data, error } = await supabase
    .from('sections')
    .select('*')
    .eq('name', 'about')
    .single();

  if (error) {
    console.error('Fejl ved hentning:', error);
  } else {
    this.title = data.title;
    this.body = data.body;
  }
}

}
