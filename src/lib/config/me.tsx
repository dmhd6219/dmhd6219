import * as React from 'react';
import MailIcon from '@/components/ui/icon/mail.tsx';
import TelegramIcon from '@/components/ui/icon/telegram.tsx';
import GithubIcon from '@/components/ui/icon/github.tsx';
import LastFmIcon from '@/components/ui/icon/lastfm.tsx';
import CoffeeIcon from '@/components/ui/icon/coffee.tsx';

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
    'GSAP',
    'Three.js',
    'shadcn-ui',
    'Ant-Design',
    'Material UI',
    'ESLint',
    'Prettier',
    'husky',
    'lint-staged',
    'Redux',
    'Zustand',
    'MobX',
    'RTK Query',
    'Tanstack Query',
    'jest',
    'vitest',
    'playwright',
    'storybook',
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
    repo: 'dmhd6219',
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
    icon?: React.ReactNode;
}

export const links: Link[] = [
    {
        href: 'mailto:svyatoslavsvyatkin@yandex.ru',
        title: 'Почта',
        icon: <MailIcon color="muted-foreground" />,
    },
    {
        href: 'https://t.me/dmhd6219',
        title: 'Telegram',
        icon: <TelegramIcon color="muted-foreground" />,
    },
    {
        href: 'https://github.com/dmhd6219',
        title: 'GitHub',
        icon: <GithubIcon color="muted-foreground" />,
    },
    {
        href: 'https://last.fm/user/dmhd',
        title: 'LastFm',
        icon: <LastFmIcon color="muted-foreground" />,
    },
    {
        href: 'https://pay.cloudtips.ru/p/02da9349',
        title: 'Buy me a coffee',
        icon: <CoffeeIcon color="muted-foreground" />,
    },
];
