import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import supabase from '../../services/supabase.client';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './edit.component.html'
})
export class EditComponent {
  title = '';
  body = '';
  editing = true;

  constructor(private router: Router) {
    // Tjek om admin er logget ind
    if (!localStorage.getItem('admin')) {
      this.router.navigate(['/login']); // redirect hvis ikke logget ind
    } else {
      this.loadData();
    }
  }

async loadData() {
  const { data, error } = await supabase
    .from('sections')         // brug sections, ikke pages
    .select('*')
    .eq('name', 'about')      // brug name, ikke id
    .single();

  if (error) {
    console.error('Fejl ved hentning:', error);
  } else {
    this.title = data.title;
    this.body = data.body;
  }
}


async save() {
  const { error } = await supabase
    .from('sections')
    .update({ title: this.title, body: this.body })
    .eq('name', 'about');

    if (error) {
      console.error(error);
      alert('Fejl ved gem');
    } else {
      alert('Gem succesfuld');
      this.router.navigate(['/']); // tilbage til AboutComponent
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
