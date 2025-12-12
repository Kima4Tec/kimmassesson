import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Technology {
  name: string;
  category: string;
  purpose: string;
  keyPoints: string;
  skill: string;
}
@Component({
  selector: 'app-tech',
  imports: [CommonModule],
  templateUrl: './tech.html',
  styles: ``
})


export class Tech  {
technologies: Technology[] = [
  // -------------------- ØVET --------------------
  { name: 'Angular', category: 'Frontend framework', purpose: 'Store webapps', keyPoints: 'Typescript, struktureret, opinionated', skill: 'Øvet' },
  { name: '.NET Core Web API', category: 'Backend framework', purpose: 'REST API’er', keyPoints: 'Hurtigt, cross-platform, C#', skill: 'Øvet' },
  { name: 'Blazor', category: 'Frontend framework (.NET)', purpose: 'Webapps i C#', keyPoints: 'WebAssembly eller server-rendered', skill: 'Øvet' },
  { name: 'C#', category: 'Programmeringssprog', purpose: 'Backend, desktop, spil', keyPoints: 'Strongly typed, .NET integreret', skill: 'Øvet' },
  { name: 'JavaScript / TypeScript', category: 'Programmeringssprog', purpose: 'Browser / backend / full-stack', keyPoints: 'Dynamisk / strongly typed', skill: 'Øvet' },
  { name: 'HTML / CSS / Sass / SCSS', category: 'Styling / markup', purpose: 'Struktur og styling af websider', keyPoints: 'Grundlæggende styling, variabler, nesting', skill: 'Øvet' },
  { name: 'Tailwind CSS / Bootstrap / Material UI / MudBlazor / Ant Design / Chakra UI', category: 'Styling / UI bibliotek', purpose: 'Styling og komponenter', keyPoints: 'Prebuilt komponenter, utility-classes, konsistent design', skill: 'Øvet' },
  { name: 'MS SQL', category: 'Database', purpose: 'Data storage', keyPoints: 'Relationel, NoSQL, key-value, embedded, caching', skill: 'Øvet' },
  { name: 'Postman / Swagger / Scalar / GraphQL / Apollo', category: 'API / dokumentation', purpose: 'Test og dokumentation af API’er', keyPoints: 'REST & GraphQL support, UI til test', skill: 'Øvet' },
  { name: 'Git', category: 'Versionsstyring', purpose: 'Kontrol af kildekode, samarbejde, historik', keyPoints: 'Commit, branch, merge, pull, push, konfliktløsning, GitHub/GitLab integration', skill: 'Øvet'},
  { name: 'Draw.io', category: 'Dokumentation / Visualisering', purpose: 'Diagrammer og flowcharts', keyPoints: 'Flowcharts, UML, systemdiagrammer, process-diagrammer', skill: 'Øvet'},
  { name: 'Markdown', category: 'Dokumentation', purpose: 'Letvægts tekstformatering', keyPoints: 'Dokumentation, README-filer, links, billeder, lister', skill: 'Øvet' },



  
  // -------------------- LETØVET --------------------
  { name: 'Python', category: 'Programmeringssprog', purpose: 'Dataanalyse, backend, automation, scripting, machine learning', keyPoints: 'Let syntaks, stort økosystem, bruges til AI/ML, scripting og hurtig prototyping', skill: 'Letøvet'},
  { name: 'Python (Data Science / Big Data)', category: 'Big Data / Data Science', purpose: 'Dataanalyse, visualisering, statistik, manipulation af datasets', keyPoints: 'Brug af Pandas til datamanipulation, Matplotlib & Seaborn til visualisering, let scripting og prototyping', skill: 'Letøvet'},
  { name: 'React', category: 'Frontend bibliotek', purpose: 'UI-komponenter', keyPoints: 'Component-driven, fleksibelt, stort økosystem', skill: 'Letøvet' },
  { name: 'Next.js', category: 'React full-stack framework', purpose: 'SSR, SSG, full-stack', keyPoints: 'File-based routing, API routes, serverless functions', skill: 'Letøvet' },
  { name: 'JWT (JSON Web Token)', category: 'Auth / sikkerhed', purpose: 'Token-baseret authentication', keyPoints: 'Stateless, signeret token', skill: 'Letøvet' },
  { name: 'bcrypt / Argon2', category: 'Kryptering / password hashing', purpose: 'Sikker lagring af passwords', keyPoints: 'Salted hash, industry standard', skill: 'Letøvet' },
  { name: 'Moq', category: 'Mocking framework', purpose: 'Unit test', keyPoints: 'Alternativ til Moq. Meget simpel syntaks, intuitivt API.', skill: 'Letøvet' },
  { name: 'NSubstitute', category: 'Mocking framework', purpose: 'Unit test', keyPoints: 'Det mest kendte. Bruges til at fake interfaces, services, repositories osv.', skill: 'Letøvet' },
  { name: 'EF Core InMemory Database', category: 'Fake database', purpose: 'Unit test', keyPoints: 'Bruges til integration-lignende tests uden en rigtig database.', skill: 'Letøvet' },
  { name: 'Azure', category: 'Cloud / DevOps', purpose: 'Hosting, CI/CD, cloud services, databaser, serverless', keyPoints: 'Opsætning af services, deployment pipelines, cloud resources, integration med .NET / Node.js', skill: 'Letøvet'},
  { name: 'Mermaid', category: 'Dokumentation / Visualisering', purpose: 'Diagrammer via tekstsyntax', keyPoints: 'Flowcharts, sequence diagrams, Gantt charts via tekst', skill: 'Letøvet'},
  
  // -------------------- BEGYNDER --------------------
  { name: 'C++', category: 'Programmeringssprog', purpose: 'Backend, desktop, Iot, spiludvikling, embedded', keyPoints: 'Høj performance, low-level kontrol, kompilering, bruges i real-time systemer', skill: 'Begynder' },
  { name: 'Node.js', category: 'JavaScript runtime', purpose: 'Backend', keyPoints: 'Event-driven, non-blocking', skill: 'Begynder' },
  { name: 'Docker / Kubernetes', category: 'DevOps', purpose: 'Containerization & deployment', keyPoints: 'Isolation, scaling, reproducible builds', skill: 'Begynder' },
  { name: 'Apache / Nginx', category: 'Webserver / reverse proxy', purpose: 'Hosting, load balancing', keyPoints: 'Modulbaseret, hurtig, lavt memory-forbrug', skill: 'Begynder' },
  { name: 'MVC (.NET MVC)', category: 'Arkitektur / framework', purpose: 'Webapps med Views & Controllers', keyPoints: 'Separation of concerns', skill: 'Begynder' },
  { name: 'Firebase / Supabase', category: 'Backend-as-a-Service', purpose: 'Auth, DB, Hosting', keyPoints: 'Realtime database, serverless, open-source', skill: 'Begynder' },
  { name: 'Vite / Webpack / Parcel', category: 'Build tools / bundler', purpose: 'Pakning af frontend', keyPoints: 'Hot reload, bundling, optimering', skill: 'Begynder' },
  { name: 'Linux (Ubuntu)', category: 'OS / DevOps', purpose: 'Server administration, hosting, terminal, scripting', keyPoints: 'Begynderniveau, terminal, package management, server opsætning', skill: 'Begynder' },
  { name: 'Doxygen', category: 'Dokumentation / Code Comments', purpose: 'Generering af dokumentation fra kode', keyPoints: 'C#, C++, Java integration, automatisk API-dokumentation', skill: 'Begynder'},
  { name: 'Fritzing', category: 'Dokumentation / Hardware', purpose: 'Elektroniske kredsløb og prototyping', keyPoints: 'Breadboard layout, schematics, PCB design, dokumentation af hardware', skill: 'Begynder'},
  { name: 'Jupyter Notebook', category: 'Dokumentation / Data Science', purpose: 'Interaktiv kode, dataanalyse og visualisering', keyPoints: 'Python, Markdown, plots, dataframes, prototyping', skill: 'Begynder'},

  // -------------------- IKKE PRØVET --------------------
  { name: 'NestJS', category: 'Backend framework (Node)', purpose: 'Enterprise API’er', keyPoints: 'Angular-lignende struktur, modulært, DI', skill: 'Ikke prøvet' },
  { name: 'Prisma', category: 'ORM / Database toolkit', purpose: 'Database abstraction', keyPoints: 'Works with Postgres, MySQL, SQLite, type-safe', skill: 'Ikke prøvet' },
  { name: 'In-memory DB (f.eks. SQLite in-memory, Redis)', category: 'Test / Caching', purpose: 'Hurtig midlertidig database', keyPoints: 'Ideel til unit testing og prototyping', skill: 'Ikke prøvet' },
  { name: 'Electron', category: 'Desktop apps', purpose: 'Cross-platform desktop apps', keyPoints: 'Node + Chromium', skill: 'Ikke prøvet' },
  { name: 'Jest / Mocha / Chai / Cypress / Playwright', category: 'Test frameworks', purpose: 'Unit, integration, end-to-end testing', keyPoints: 'Automation, test coverage, browser & server tests', skill: 'Ikke prøvet' },
  { name: 'OAuth2 / OpenID Connect', category: 'Auth / sikkerhed', purpose: 'Single sign-on / third-party auth', keyPoints: 'Standard protokoller til autentifikation', skill: 'Ikke prøvet' },
  { name: 'PostgreSQL / MySQL / SQLite / MongoDB / Redis', category: 'Database', purpose: 'Data storage', keyPoints: 'Relationel, NoSQL, key-value, embedded, caching', skill: 'ikke prøvet' }
];
}