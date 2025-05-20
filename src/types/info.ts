export interface InfoBlockEntry {
    title: string;
    subtitle?: string;
    titleLink?: string;
    image?: string;

    rightSection: string;
    description: string;
    bullets?: string[];
    badges?: string[];
}

export interface ProjectType {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link?: string;
    github?: string;
}
