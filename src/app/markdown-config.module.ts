import { NgModule } from '@angular/core';
import {
  MarkdownModule,
  MarkedOptions,
  MarkedRenderer,
  MARKED_OPTIONS,
} from 'ngx-markdown';
import markdownItAnchor from 'markdown-it-anchor';

export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  return {
    renderer,
  };
}

@NgModule({
  imports: [
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MARKED_OPTIONS,
        useFactory: markedOptionsFactory,
      },
    }),
  ],
  exports: [MarkdownModule],
})
export class MarkdownConfigModule {}
