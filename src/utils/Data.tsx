import {TbBrandNextjs, TbBrandSvelte} from "react-icons/tb";
import {SiFastapi, SiFlask} from "react-icons/si";
import React from "react";

import SocialNetworkScreenshot from '../assets/SocialNetworkScreenshot.png'
import SpotiStatsScreenshot from '../assets/SpotiStatsScreenshot.png';

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
    id : number,
    name : string,
    desc : string,
    stack : string[],
    img : string
}
export const ProjectDetails : ProjectDetailType[] = [
    {
        id : 0,
        name : "Social Network",
        desc : "Just a Social Network, built on Flask",
        stack : ['HTML', 'CSS', 'Python', 'Flask', 'SQLAlchemy',],
        img : SocialNetworkScreenshot
    },

    {
        id : 1,
        name : "Spotify Statistics",
        desc : "Simple app that shows statistics of user's Spotify Account",
        stack : ['HTML', 'CSS', 'Python', 'Flask'],
        img : SpotiStatsScreenshot
    }
]

export interface NavLinkType {
    id : number,
    name : string,
    href: string
}
export const NavLinks: NavLinkType[] = [
    {
        id : 0,
        name : 'Home',
        href : 'Home'
    },
    {
        id : 1,
        name : 'My Skills',
        href : 'Skills'
    },
    {
        id : 2,
        name : 'My Projects',
        href : 'Projects'
    },
]