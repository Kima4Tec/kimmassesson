import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import supabase from '../../services/supabase.client';
@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">Login</h2>
      <button
        (click)="loginWithGitHub()"
        class="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600 transition-colors"
      >
        Login med GitHub
      </button>
    </div>
  `
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // Tjek om brugeren allerede er logget ind
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) this.router.navigate(['/edit']);
    });

    // Lyt på auth state
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) this.router.navigate(['/edit']);
    });
  }

  loginWithGitHub() {
    supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:4200/login' // Angular-route efter login
      }
    }).then(({ error }) => {
      if (error) console.error('Login fejl:', error);
    });
  }
}
