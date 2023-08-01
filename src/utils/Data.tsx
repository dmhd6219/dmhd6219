import {TbBrandNextjs, TbBrandSvelte} from "react-icons/tb";
import {SiFastapi, SiFlask} from "react-icons/si";
import React from "react";

import SocialNetworkScreenshot from '../assets/SocialNetworkScreenshot.png'
import SpotiStatsScreenshot from '../assets/SpotiStatsScreenshot.png';
import HiroshiScreenshot from '../assets/HiroshiScreenshot.png'
import BookingBotScreenshot from '../assets/BookingBotScreenshot.png'
import JoJoScreenshot from '../assets/JoJoScreenshot.png'
import FloppaScreenshot from '../assets/FloppaScreenshot.jpg'


export interface SkillType {
    id: number,
    tech: string,
    icon: JSX.Element
}

export const Skills: SkillType[] = [
    {
        id: 0,
        tech: 'NextJs',
        icon: <TbBrandNextjs/>,

    },
    {
        id: 1,
        tech: 'SvelteKit',
        icon: <TbBrandSvelte/>,

    },
    {
        id: 2,
        tech: 'Flask',
        icon: <SiFlask/>,

    },
    {
        id: 3,
        tech: 'FastAPI',
        icon: <SiFastapi/>,

    }
]


export interface ProjectDetailType {
    id: number,
    name: string,
    desc: string,
    stack: string[],
    img: string,
    git ?: string
}

export const ProjectDetails: ProjectDetailType[] = [
    {
        id: 0,
        name: "Spotify Statistics",
        desc: "Discover the awe-inspiring app built on Flask, designed to showcase mesmerizing statistics from users' " +
            "Spotify accounts. Born out of creativity and passion, this remarkable project enables users to share their " +
            "Spotify profiles in a beautiful, engaging manner. With a user-friendly interface and seamless " +
            "functionality, it captivates music enthusiasts worldwide. Its ability " +
            "to connect users through their shared love for music makes it truly extraordinary. This amazing creation " +
            "has undoubtedly elevated the music-sharing experience to new heights",
        stack: ['HTML', 'CSS', 'Flask'],
        img: SpotiStatsScreenshot,
        git : "https://github.com/dmhd6219/SpotifyStatictics"
    },

    {
        id: 1,
        name: "Social Network",
        desc: "The cutting-edge social network built on Flask is an project developed for Yandex Lyceum. " +
            "Combining innovative features and user-friendly interface, it has redefined social interaction. " +
            "Powered by Flask, this platform ensures seamless performance and scalability. " +
            "Users can connect, share, and engage in a dynamic online community. " +
            "From personalized profiles to interactive posts, the network fosters connections among its users. " +
            "With a perfect blend of creativity and technical finesse, this impressive " +
            "creation has left a lasting impact.",
        stack: ['HTML', 'CSS', 'Flask', 'SQLAlchemy',],
        img: SocialNetworkScreenshot,
        git : "https://github.com/dmhd6219/SocialNetwork"
    },

    {
        id: 2,
        name: "Hiroshi Matsumoto's website remake",
        desc: "Prepare to be amazed by this extraordinary app, combining Svelte + DaisyUI on the frontend and FastAPI " +
            "on the backend. Inspired by the brilliance of Hiroshi Matsumoto's website, this remake takes user " +
            "experience to the next level. With Svelte's dynamic and responsive features along with DaisyUI's sleek " +
            "design elements, the frontend exudes elegance and charm. FastAPI ensures fast performance on " +
            "the backend, creating a seamless browsing experience. Delve into the world of art, culture, and creativity " +
            "as this remarkable app pays homage to the original site while pushing the boundaries of innovation. ",
        stack: ['FastAPI', 'SQLAlchemy', 'SvelteKit', 'DaisyUI'],
        img: HiroshiScreenshot,
        git : "https://github.com/dmhd6219/innopolis-fwd-project"
    },

    {
        id: 3,
        name: "Telegram Bot for booking rooms",
        desc: "Unleash the power of React with this astounding Telegram web app, revolutionizing the way university " +
            "students book rooms. Seamlessly blending cutting-edge technology and user-friendly design, " +
            "it's truly amazing! This app provides a streamlined and efficient platform for reserving university spaces," +
            " making the process hassle-free and intuitive. Leveraging React's dynamic capabilities, users can " +
            "effortlessly navigate and book rooms, ensuring a seamless experience. From real-time availability " +
            "updates to interactive features, this app takes university room booking to new heights.",
        stack: ['React', 'Telegram Web'],
        img: BookingBotScreenshot,
        git : "https://github.com/dmhd6219/booking-bot-frontend"
    },

    {
        id: 4,
        name: "JoJo Organizer",
        desc: "Step into the extraordinary world of PyQt5 with this quirky desktop alarm app that defies convention " +
            "and surprises users with its peculiar charm. Prepare to be amused as the window playfully shakes, " +
            "making it impossible to close conventionally. With an unexpected touch of humor, an Obama prism " +
            "adorns the main page, adding a unique twist to the experience. Not stopping there, the app offers " +
            "an exciting twist to music by bass-boosting all loaded tracks, unleashing a powerful audio experience. " +
            "This innovative creation showcases the limitless possibilities of PyQt5, pushing boundaries and captivating" +
            " users with its wondrous oddity. ",
        stack: ['PyQt5'],
        img: JoJoScreenshot,
        git : "https://github.com/dmhd6219/JoJoOrganizer"
    },

    {
        id: 5,
        name: "Floppa Mod",
        desc: "Embark on an amazing Minecraft adventure with the Forge-built mod introducing the enchanting world of " +
            "the Big Russian Cat - Floppa! This delightful addition brings a whole new level of charm to the game as" +
            " players encounter the lovable feline companion. But the wonders don't end there! The mod also introduces " +
            "a tantalizing treat to satisfy any virtual hunger - delicious dumplings! With every bite, players' hunger " +
            "meters are replenished, making this mod both delightful and practical. ",
        stack: ['Java', 'Forge'],
        img: FloppaScreenshot,
        git : "https://github.com/dmhd6219/FloppaMod.git"
    },


]

export interface NavLinkType {
    id: number,
    name: string,
    href: string
}

export const NavLinks: NavLinkType[] = [
    {
        id: 0,
        name: 'Home',
        href: 'Home'
    },
    {
        id: 1,
        name: 'My Skills',
        href: 'Skills'
    },
    {
        id: 2,
        name: 'My Projects',
        href: 'Projects'
    },
]