export const techStack = [
    'React',
    'Next.js',
    'Svelte',
    'SvelteKit',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'TailwindCSS',
    'Styled-Components',
    'Framer-Motion',
    'shadcn-ui',
    'Ant-Design',
    'ESLint',
    'Prettier',
    'husky',
    'lint-staged',
    'Redux',
    'RTK Query',
    'Tanstack Query',
    'Python',
    'FastApi',
    'Flask',
    'SQLite',
    'PostgreSQL',
    'MongoDB',
    'SQLAlchemy',
    'Alembic',
    'PyPy',
    'poetry',
    'pylint',
    'GitHub Actions',
    'GitLab CI/CD',
    'Docker',
    'Git',
];

export const githubRepo = {
    author: 'dmhd6219',
    repo: 'portfolio-website',
};

export const city = {
    name: 'Иннополис',
    href: 'https://ru.wikipedia.org/wiki/Иннополис',
};

interface Nickname {
    default: string;
    colored: string;
}

export const me: Nickname = {
    default: 'dmhd',
    colored: '6219',
};

interface Link {
    href: string;
    title: string;
}

export const navLinks: Link[] = [
    {
        href: '#about',
        title: 'Про меня',
    },
    {
        href: '#projects',
        title: 'Проекты',
    },
];
