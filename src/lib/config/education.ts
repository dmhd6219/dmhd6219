import type { InfoBlockEntry } from '@/types/info';
import IUIcon from '@/assets/iu_green.png';
import UPMIcon from '@/assets/upm.png';

export const education: InfoBlockEntry[] = [
    {
        title: 'Университет Иннополис',
        subtitle: 'Факультет компьютерных наук',
        titleLink: 'https://innopolis.university/',
        image: IUIcon,
        rightSection: '2022 - 2026 (4 курс)',
        description:
            'Обучаюсь на программе “Разработка ПО”. GPA (средний балл) на данный момент 4,38. Закончил на отлично много полезных курсов, таких как “Алгоритмы и Структуры Данных”, “Проектирование и Анализ Программных Систем”, “Разработка пользовательских интерфейсов веб приложений”, “UX/UI Дизайн”, “Промышленная разработка ПО на Javascript (углубленный курс)”',
    },
    {
        title: 'University Putra Malaysia',
        subtitle: 'Faculty of Computer Science and Information Technology',
        titleLink: 'https://upm.edu.my/',
        image: UPMIcon,
        rightSection: '2025 (6 семестр)',
        description:
            'Учился один семестр по обмену. Обучался дисциплинам, связанные с управлением разработкой, например “Introduction to Software Engineering”.',
    },
];

export const additionalEducation: InfoBlockEntry[] = [];
