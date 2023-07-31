import {TbBrandNextjs, TbBrandSvelte} from "react-icons/tb";
import {SiFastapi, SiFlask} from "react-icons/si";
import React from "react";

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