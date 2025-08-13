# Deploy Angular projekt til GitHub Pages

Guide til at deploye Angular-projekt direkte til GitHub Pages.

---

## Forudsætninger

- Du har en GitHub-konto.
- Dit Angular-projekt er i et GitHub repository.
- Angular CLI er installeret globalt (`npm install -g @angular/cli`).

---

## Trin 1: Installer deployment-pakken

```bash
npm install --save-dev angular-cli-ghpages
```

---

## Trin 2: Opdater `angular.json`

Sørg for at din `angular.json` fil har en korrekt `outputPath` under build:

```bash
"deploy": {
  "builder": "angular-cli-ghpages:deploy",
  "options": {
    "baseHref": "/repo-navn/"
  }
}
```

---

## Trin 3: Deploy til GitHub Pages

Kør deploy kommandoen med `--base-href` sat til URL’en for din GitHub Pages:

```bash
ng deploy --base-href="/repo-navn/"
```

Erstat `<brugernavn>` og `<repo-navn>` med dine egne værdier.

---

## Trin 4: Vent og test

https://<brugernavn>.github.io/<repo-navn>/

---

## Links

- [angular-cli-ghpages GitHub](https://github.com/angular-schule/angular-cli-ghpages)
- [Angular Deployment Guide](https://angular.io/guide/deployment)

---
