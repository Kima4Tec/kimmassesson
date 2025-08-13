import { Component, afterNextRender, inject } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MarkdownConfigModule } from '../../markdown-config.module';

@Component({
  selector: 'app-deploy-ghpages',
  imports: [MarkdownModule, AsyncPipe, MarkdownConfigModule],
  templateUrl: './deploy-ghpages.html',
  styles: ``,
})
export class DeployGhpages {
  private http = inject(HttpClient);
  private router = inject(Router);
  markdownContent$: Observable<string>;
  SecurityContext: any;

  constructor() {
    this.markdownContent$ = this.http.get('deploy-angular-github.md', {
      responseType: 'text',
    });

    // Sørg for, at DOM er fuldt rendret før anker-link-håndtering
    afterNextRender(() => {
      const hash = window.location.hash;
      if (hash) {
        this.scrollToAnchor(hash.substring(1));
      }
    });
  }

  onMarkdownClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.tagName.toLowerCase() === 'a') {
      const href = target.getAttribute('href');
      if (href?.startsWith('#')) {
        event.preventDefault();
        const elementId = href.substring(1);
        this.scrollToAnchor(elementId);
      } else if (href?.startsWith('/')) {
        event.preventDefault();
        this.router.navigate([href]);
      }
      // Eksterne links håndteres af browseren
    }
  }
  onMarkdownReady() {
    // Find alle overskrifter i dit markdown-område
    const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headers.forEach((header) => {
      if (!header.id) {
        // Lav en slug fra tekstindholdet
        const slug =
          header.textContent
            ?.toLowerCase()
            .trim()
            // Erstat danske bogstaver og fjern specialtegn:
            .replace(/[æå]/g, 'a')
            .replace(/ø/g, 'o')
            // Erstat alt ikke-alfanumerisk med bindestreg
            .replace(/[^a-z0-9]+/g, '-')
            // Fjern evt. bindestreg i starten og slutning
            .replace(/^-+|-+$/g, '') ?? '';

        header.id = slug;
      }
    });

    // Scroll til hash hvis der er et
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        this.scrollToAnchor(hash.substring(1));
      }, 0);
    }
  }

  private scrollToAnchor(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      const yOffset = 80; // justér her til højden af din toolbar i pixels
      const y =
        element.getBoundingClientRect().top + window.pageYOffset - yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      console.warn(`Element med id "${elementId}" blev ikke fundet.`);
    }
  }
}
