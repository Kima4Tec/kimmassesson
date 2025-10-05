import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import supabase from '../../services/supabase.client';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">Login</h2>
      <button (click)="startOAuth()" class="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
        Login med GitHub
      </button>
      <p *ngIf="message" class="mt-3 text-sm text-red-600">{{ message }}</p>
    </div>
  `
})
export class LoginComponent implements OnInit {
  message = '';
  private redirectTo = 'https://kimmassesson.dk/#/login';

  constructor(private router: Router) {}

  async ngOnInit() {
    // 1) Prøv at fange callback-session try-with-retry
    const session = await this.tryGetSessionFromUrlWithRetry(4, 300);
    if (session) {
      localStorage.setItem('admin', 'true');
      this.router.navigate(['/edit']);
      return;
    }

    // 2) Almindelig session-check
    try {
      const { data: { session: s } } = await supabase.auth.getSession();
      if (s) {
        localStorage.setItem('admin', 'true');
        this.router.navigate(['/edit']);
        return;
      }
    } catch (err) {
      console.warn('getSession fejl (ikke kritisk):', err);
    }

    // 3) Lyt for auth state ændringer (fx når popup fuldfører)
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        localStorage.setItem('admin', 'true');
        this.router.navigate(['/edit']);
      }
    });
  }

  private async tryGetSessionFromUrlWithRetry(retries = 3, delayMs = 300) {
    for (let i = 0; i < retries; i++) {
      try {
        // Extract the auth code from the URL query parameters
        const params = new URLSearchParams(window.location.search);
        const authCode = params.get('code');
        if (!authCode) {
          return null;
        }
        const { data, error } = await supabase.auth.exchangeCodeForSession(authCode);
        if (error) {
          const msg = (error?.message || '').toLowerCase();
          // hvis det ser ud som lock-fejl, retry; ellers stop
          if (msg.includes('navigator lock') || msg.includes('lockmanager') || msg.includes('lock')) {
            await this.wait(delayMs);
            continue;
          } else {
            console.warn('getSessionFromUrl error:', error);
            return null;
          }
        }
        return data?.session ?? null;
      } catch (err: any) {
        const text = String(err?.message || err).toLowerCase();
        if (text.includes('navigator lock') || text.includes('lockmanager')) {
          await this.wait(delayMs);
          continue;
        }
        console.error('getSessionFromUrl kastede:', err);
        return null;
      }
    }
    console.warn('getSessionFromUrl: retries udløbet');
    return null;
  }

  private wait(ms: number) {
    return new Promise(res => setTimeout(res, ms));
  }

  async startOAuth() {
    try {
      // Undgå at starte OAuth hvis URL allerede har OAuth-parametre
      const urlHasParams = location.search.includes('code') || location.hash.includes('access_token');
      if (urlHasParams) {
        this.message = 'Venter på callback — genindlæs hvis det ikke fortsætter.';
        return;
      }

      await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: { redirectTo: this.redirectTo }
      });
      // signInWithOAuth vil redirecte væk; vi behøver ikke vente her
    } catch (err:any) {
      console.error('startOAuth fejl:', err);
      this.message = 'Fejl ved start af login. Prøv inkognito eller en anden browser.';
    }
  }
}
