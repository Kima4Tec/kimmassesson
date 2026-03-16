export type MyProject = {
  name: string
  link: string
  description: string
  image: string
  tools: string
}

export const myProjects: MyProject[] = [
  {
    name: 'Atopos',
    link: 'https://atopos.dk/',
    description: 'En side, jeg lavede for Atopos, der skaber forbindelser mellem kunst & viden samt kultur & erhvervsliv gennem deres forening.',
    image: 'atopos.png',
    tools: 'Angular | TailwindCss',
  },
  {
    name: 'Gnist',
    link: 'https://gnist.show/',
    description: 'Gnist lavede jeg som bestilling til TEC, der samarbejder med Gnist. Gnist er en forening under Atopos. Det er andre lærlinge, der opdaterer den nu',
    image: 'gnist.png',
    tools: 'HTML | CSS | JavaScript',
  },
    {
    name: 'Kf2026',
    link: 'https://kf2026.dk/',
    description: 'Kf2026, Koorporativt Fællesskab, en foreningsside, der stadig er under udvikling',
    image: 'kf2026.png',
    tools: 'HTML | CSS | JavaScript',
  },
    {
    name: 'Eleutheria',
    link: 'https://eleutheria.dk/',
    description: 'Eleutheria, en side under Koorporativt fællesskab, der er under udvikling og som omhandler ADHD',
    image: 'eleutheria.png',
    tools: 'HTML | CSS | JavaScript',
  },
    {
    name: 'Novocento',
    link: 'https://novocento.dk/',
    description: 'Min egen firmahjemmeside. En side, som jeg også bruger til at teste ting af på. Lavet i WordPress på kort tid og med login til medlemsside.',
    image: 'novocento.png',
    tools: 'WordPress | MySql | Php',
  },
]