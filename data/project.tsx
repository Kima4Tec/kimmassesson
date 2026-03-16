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
]