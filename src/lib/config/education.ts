import type { InfoBlockEntry } from '@/types/info';
import IUIcon from '@/assets/iu_green.png';
import UPMIcon from '@/assets/upm.png';
import YY from '@/assets/yy.webp';
import YO from '@/assets/yo.png';
import KTS from '@/assets/kts.png';
import YA from '@/assets/ya.png';

export const education: InfoBlockEntry[] = [
    {
        title: 'Университет Иннополис',
        subtitle: 'Факультет компьютерных наук',
        titleLink: 'https://innopolis.university/',
        image: IUIcon,
        rightSection: '2022 - 2026 (4 курс)',
        description:
            'Обучаюсь на программе “Разработка ПО”. GPA (средний балл) на данный момент 4,4. Закончил на отлично много полезных курсов, таких как “Алгоритмы и Структуры Данных”, “Проектирование и Анализ Программных Систем”, “Разработка пользовательских интерфейсов веб приложений”, “UX/UI Дизайн”, “Промышленная разработка ПО на Javascript (углубленный курс)”',
    },
    {
        title: 'University Putra Malaysia',
        subtitle: 'Faculty of Computer Science and Information Technology',
        titleLink: 'https://upm.edu.my/',
        image: UPMIcon,
        rightSection: '2025 (6 семестр)',
        description:
            'Учился один семестр по обмену в Малайзии. Обучался дисциплинам, связанные с управлением разработкой, например “Introduction to Software Engineering”.',
    },
];

export const additionalEducation: InfoBlockEntry[] = [
    {
        title: 'Школа Разработки Интерфейсов от Яндекса',
        titleLink: 'https://yandex.ru/yaintern/schools/frontend',
        image: YY,
        rightSection: '2024',
        description:
            'Слушал лекции по актуальным в фронтенде темам и выполнял по ним домашние задания, после в течение месяца в команде разрабатывал проект, выданный командой Яндекса, и участвовал в хакатонах. Проект представлял из себя магазин с админ панелью. Использовали React, TailwindCSS, shadcn-ui, RTK Query. На проекте я был тимлидом, сделал практически всю верстку, подключил большую часть бекенда, настроил вотчинг и CI/CD.',
    },
    {
        title: 'Студкемп Яндекса по Разработке ПО',
        subtitle: 'Университет ИТМО',
        titleLink: 'https://education.yandex.ru/studcamp-itmo',
        image: YO,
        rightSection: '2024',
        description:
            'Принял участие в Студкемпе от Яндекса, проходившем в университете ИТМО, выбрав трек по информационной безопасности. Изучил обратную разработку и анализ кода для поиска уязвимостей, основы прикладной криптографии, методы защиты ИИ и моделирование атак на системы. Также изучал пентесты и другие практики для тестирования безопасности.',
    },
    {
        title: 'Курс по React разработке от KTS',
        titleLink: 'https://metaclass.kts.studio/beginner_react',
        image: KTS,
        rightSection: '2025',
        description:
            'Во время курса обучался React, TypeScript, управлению состоянием с MobX, работе с API и роутингом. Завершил обучение дипломным проектом, включающим публикацию и презентацию приложения.',
    },
    {
        title: 'Студкемп Яндекса по ИИ в Робототехнике',
        subtitle: 'ИРИТ-РТФ УрФУ',
        titleLink: 'https://education.yandex.ru/studcamp-urfu',
        image: YO,
        rightSection: '2024',
        description:
            'Принял участие в Студкемпе по робототехнике от Яндекса, проходившем в Уральском Федеральном Университете. Изучал теорию управления мобильными роботами, алгоритмы планирования пути, машинное зрение с OpenCV и работу с интерфейсами передачи данных. Реализовал базовую конструкцию робота, обрабатывал данные с датчиков и управлял манипулятором. Оптимизировал алгоритмы для робота. Участвовал в финальном хакатоне.',
    },
    {
        title: 'Яндекс Лицей',
        titleLink: 'https://lyceum.yandex.ru/',
        image: YA,
        rightSection: '2021',
        description:
            'Закончил программу Яндекс Лицея, войдя в топ выпускников. В рамках обучения освоил разработку веб-приложений на Flask, научился создавать навыки для голосового помощника Алисы, работать с системами контроля версий и git, создавать чат-ботов и тестировать программы с unittest и pytest. Получил навыки написания чистого, качественного кода и рецензирования кода сокурсников.',
    },
];
