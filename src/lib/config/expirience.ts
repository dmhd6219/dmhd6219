import IUIcon from '@/assets/iu.png';
import SmashupIcon from '@/assets/smashup.png';

interface ExperienceItem {
    company: string;
    position: string;
    period: string;
    description: string;
    bullets?: string[];
    technologies: string[];
    link?: string;
    image?: string;
}

export const experiences: ExperienceItem[] = [
    {
        company: 'Передовая Инженерная Школа УИ',
        link: 'https://engineerschool.innopolis.university/',
        position: 'Frontend разработчик',
        period: 'Июнь 2024 - Декабрь 2024',
        description:
            'Участвовал в двух проектах: разработка с нуля и развитие существующего приложения.',
        bullets: [
            'Разрабатывал с нуля веб приложение на React, Redux и TailwindCSS архитектуру, интерфейс и управление состоянием.',
            'Во втором проекте развивал готовое приложение на Next.js: добавлял новые функции, участвовал в улучшении UI и оптимизации кода.',
        ],
        technologies: [
            'React',
            'TypeScript',
            'Next.js',
            'Tanstack Query',
            'Redux',
        ],
        image: IUIcon,
    },
    {
        company: 'SmashUp',
        link: 'https://smashup.ru/',
        position: 'Frontend разработчик',
        period: 'Март 2024 - Июнь 2024',
        description:
            'Создал с нуля SPA по готовому дизайну — платформу для прослушивания мэшапов. Реализовал управление состоянием через Zustand, использовал TailwindCSS для стилизации интерфейса. Обеспечил адаптивность, удобную навигацию и быстрый отклик интерфейса.',
        technologies: ['React', 'TypeScript', 'zustand'],
        image: SmashupIcon,
    },
    {
        company: 'Kachanov',
        link: 'https://kachanovcraft.com/',
        position: 'Frontend разработчик',
        period: 'Февраль 2024',
        description:
            'Создал адаптивный лендинг с нуля по предоставленному макету. Использовал чистые HTML, CSS и JavaScript без применения фреймворков. Особое внимание уделял кроссбраузерности, адаптивности и производительности.',
        technologies: ['HTML', 'CSS', 'Javascript'],
    },
];
