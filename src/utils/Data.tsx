import {TbBrandNextjs, TbBrandSvelte} from "react-icons/tb";
import {SiFastapi, SiFlask} from "react-icons/si";
import React from "react";

import SocialNetworkScreenshot from '../assets/SocialNetworkScreenshot.png'

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
        stack : ['Python', 'Flask', 'SQLAlchemy', 'HTML', 'CSS'],
        img : SocialNetworkScreenshot
    }
]