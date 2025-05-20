import IUIcon from '@/assets/iu.png';
import SmashupIcon from '@/assets/smashup.png';
import type { InfoBlockEntry } from '@/types/info';

export const experiences: InfoBlockEntry[] = [
    {
        title: 'Передовая Инженерная Школа УИ',
        subtitle: 'Frontend разработчик',
        image: IUIcon,
        titleLink: 'https://engineerschool.innopolis.university/',

        rightSection: 'Июнь 2024 - Декабрь 2024',
        description:
            'Участвовал в двух проектах: разработка с нуля и развитие существующего приложения.',
        bullets: [
            'Разрабатывал с нуля веб приложение на React, Redux и TailwindCSS архитектуру, интерфейс и управление состоянием.',
            'Во втором проекте развивал готовое приложение на Next.js: добавлял новые функции, участвовал в улучшении UI и оптимизации кода.',
        ],
        badges: ['React', 'TypeScript', 'Next.js', 'Tanstack Query', 'Redux'],
    },
    {
        title: 'SmashUp',
        subtitle: 'Frontend разработчик',
        titleLink: 'https://smashup.ru/',
        image: SmashupIcon,

        rightSection: 'Март 2024 - Июнь 2024',
        description:
            'Создал с нуля SPA по готовому дизайну — платформу для прослушивания мэшапов. Реализовал управление состоянием через Zustand, использовал TailwindCSS для стилизации интерфейса. Обеспечил адаптивность, удобную навигацию и быстрый отклик интерфейса.',
        badges: ['React', 'TypeScript', 'zustand'],
    },
    {
        title: 'Kachanov',
        subtitle: 'Frontend разработчик',
        titleLink: 'https://kachanovcraft.com/',

        rightSection: 'Февраль 2024',
        description:
            'Создал адаптивный лендинг с нуля по предоставленному макету. Использовал чистые HTML, CSS и JavaScript без применения фреймворков. Особое внимание уделял кроссбраузерности, адаптивности и производительности.',
        badges: ['HTML', 'CSS', 'Javascript'],
    },
];
