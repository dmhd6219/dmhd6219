import type { ProjectType } from '@/types/info';
import Apple from '@/assets/apple.png';
import Avito from '@/assets/avito.png';
import Floppa from '@/assets/floppa.jpg';
import Rooms from '@/assets/rooms.png';
import Spotify from '@/assets/spotify.png';
import Shop from '@/assets/shop.png';
import Stella from '@/assets/stella.png';
import Paintings from '@/assets/paintings.png';
import Sdamgia from '@/assets/sdamgia.png';
import Jojo from '@/assets/jojo.png';

export const projects: ProjectType[] = [
    {
        title: 'Apple Website',
        description:
            'Сайт, копирующий сайт Apple с представлением iPhone 15 Pro. Тот самый, с 3D моделью.',
        image: Apple,
        technologies: ['React', 'TailwindCSS', 'GSAP', 'Three.js'],
        link: 'https://dmhd6219-yabloko.netlify.app/',
        github: 'https://github.com/dmhd6219/apple-website',
    },
    {
        title: 'Task Board',
        description:
            'Обычная доска для того, чтобы управлять статусами своих задач. На доске реализован drag-n-drop.',
        image: Avito,
        technologies: ['React', 'TailwindCSS', 'Redux', 'RTK Query'],
        github: 'https://github.com/dmhd6219/avito-frontend-trainee-assignment-spring-2025',
    },
    {
        title: 'Floppa Mod',
        description:
            'Модификация для игры Minecraft, которая добавляет в игру Флоппу как мироного моба и Пельмени как культуру, которую можно выращивать и затем есть.',
        image: Floppa,
        technologies: ['Java', 'Forge'],
    },
    {
        title: 'Rooms Booking Bot',
        description:
            'Temegram Mini App, который позволяет бронировать аудитории в университете.',
        image: Rooms,
        technologies: ['React', 'Styled-Components', 'Telegram', 'TMA'],
        github: 'https://github.com/dmhd6219/booking-bot-frontend?tab=readme-ov-file',
    },
    {
        title: 'Статистика Spotify',
        description:
            'Сайт, позволяющий узнать свою статистику прослушиваний на стриминговом сервисе Spotify.',
        image: Spotify,
        technologies: ['Python', 'Flask', 'HTML', 'CSS'],
        github: 'https://github.com/dmhd6219/SpotifyStatictics',
    },
    {
        title: 'E-commerce',
        description:
            'Сайт с функциями магазина. Из особенностей - подключенная платёжка ЮМани.',
        image: Shop,
        technologies: ['React', 'SCSS', 'MobX'],
        link: 'https://dmhd6219-additional-projects.github.io/kts-react-project/',
        github: 'https://github.com/dmhd6219-additional-projects/kts-react-project',
    },
    {
        title: 'Stella Type Checker',
        description:
            'Программа, проверяющая код на языке Stella на валидность типов.',
        image: Stella,
        technologies: ['Java'],
        github: 'https://github.com/dmhd6219-additional-projects/stella-type-checker',
    },
    {
        title: 'Магазин картин',
        description:
            'Персональный сайт Хироси Мацумото - знаковый пример элегантного дизайна и простоты. Цель этого проекта - воссоздать фронтенд сайта, чтобы отдать дань уважения оригинальному дизайну и при этом использовать современные технологии фронтенда.',
        image: Paintings,
        technologies: [
            'Svelte',
            'SvelteKit',
            'TailwindCSS',
            'Python',
            'FastAPI',
        ],
        link: 'https://dmhd6219-yabloko.netlify.app/',
        github: 'https://github.com/dmhd6219/apple-website',
    },
    {
        title: 'Парсер для sdamgia.ru',
        description:
            'Программа, которая даёт ответы на варианты тестов с сайтов РешуЕГЭ и РешуОГЭ.',
        image: Sdamgia,
        technologies: ['Python', 'BS4', 'requests'],
        github: 'https://github.com/dmhd6219/sdamgia-solver',
    },
    {
        title: 'JoJo Organizer',
        description:
            'Десктопный будильник с кучей приколов, по типу бассбуста музыки и окна, которое двигается, чтобы его нельзя было просто закрыть :)',
        image: Jojo,
        technologies: ['Python', 'PyQt5'],
        github: 'https://github.com/dmhd6219/JoJoOrganizer',
    },
];
