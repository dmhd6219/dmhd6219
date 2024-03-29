import {TbBrandNextjs, TbBrandSvelte} from "react-icons/tb";
import {SiFastapi, SiFlask} from "react-icons/si";
import React from "react";

import SocialNetworkScreenshot from '../assets/SocialNetworkScreenshot.png'
import SpotiStatsScreenshot from '../assets/SpotiStatsScreenshot.png';
import HiroshiScreenshot from '../assets/HiroshiScreenshot.png'
import BookingBotScreenshot from '../assets/BookingBotScreenshot.png'
import JoJoScreenshot from '../assets/JoJoScreenshot.png'
import FloppaScreenshot from '../assets/FloppaScreenshot.jpg'
import SdamgiaScreenshot from '../assets/SdamgiaScreenshot.png'

import {FaGithub, FaSquareLastfm, FaTelegram} from "react-icons/fa6";
import {LinkInName} from "../styles/MyProjects.styled";


export interface ContactLinkType {
    id : number,
    icon : JSX.Element,
    href : string
}
export const ContactLinks : ContactLinkType[] = [
    {
        id : 0,
        icon : <FaGithub/>,
        href : 'https://github.com/dmhd6219'
    },
    {
        id : 1,
        icon : <FaTelegram/>,
        href : 'https://t.me/dmhd6219'
    },
    {
        id : 2,
        icon : <FaSquareLastfm/>,
        href : 'https://www.last.fm/user/dmhd'
    }
]
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
    name: string | JSX.Element,
    alt : string,
    desc: string,
    stack: string[],
    img: string,
    git ?: string
}

export const ProjectDetails: ProjectDetailType[] = [
    {
        id: 0,
        name: "Spotify Statistics",
        alt : "Spotify Statistics",
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
        alt: "Social Network",
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
        alt: "Hiroshi Matsumoto's website remake",
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
        alt: "Telegram Bot for booking rooms",
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
        alt : "JoJo Organizer",
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
        alt: "Floppa Mod",
        desc: "Embark on an amazing Minecraft adventure with the Forge-built mod introducing the enchanting world of " +
            "the Big Russian Cat - Floppa! This delightful addition brings a whole new level of charm to the game as" +
            " players encounter the lovable feline companion. But the wonders don't end there! The mod also introduces " +
            "a tantalizing treat to satisfy any virtual hunger - delicious dumplings! With every bite, players' hunger " +
            "meters are replenished, making this mod both delightful and practical. ",
        stack: ['Java', 'Forge'],
        img: FloppaScreenshot,
        git : "https://github.com/dmhd6219/FloppaMod"
    },

    {
        id: 6,
        name: <span>Parser for <LinkInName href="https://sdamgia.ru/" target="_blank">sdamgia.ru</LinkInName></span>,
        alt : "Parser for sdamgia.ru",
        desc: "Enter the realm of Python with this amazing app designed to alleviate the stress of students facing " +
            "unwanted tests. Leveraging its prowess in parsing answers from sdamgia.ru, the app empowers students " +
            "with a valuable resource to tackle challenging exams in subjects they wish to avoid. With a user-friendly " +
            "CLI interface, it offers a seamless experience, providing accurate answers swiftly. This powerful tool is " +
            "a game-changer for students navigating through overwhelming academic demands, allowing them to focus on " +
            "subjects that truly matter. ",
        stack: ['Python', 'requests', 'bs4'],
        img: SdamgiaScreenshot,
        git : "https://github.com/dmhd6219/sdamgia-solver"
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
