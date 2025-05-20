import type { ProjectType } from '@/types/info.ts';

export const projects: ProjectType[] = [
    {
        title: 'E-commerce Platform',
        description:
            'Современная платформа электронной коммерции с поддержкой множества платежных систем и интеграцией с CRM.',
        image: 'https://placehold.co/600x400',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        link: 'https://example.com/project1',
        github: 'https://github.com/username/project1',
    },
    {
        title: 'AI Image Generator',
        description:
            'Приложение для генерации изображений с использованием искусственного интеллекта. Поддерживает различные стили и форматы.',
        image: 'https://placehold.co/600x400',
        technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
        link: 'https://example.com/project2',
        github: 'https://github.com/username/project2',
    },
    {
        title: 'Task Management System',
        description:
            'Система управления задачами с поддержкой команд, временных меток и аналитики.',
        image: 'https://placehold.co/600x400',
        technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
        link: 'https://example.com/project3',
        github: 'https://github.com/username/project3',
    },
];
