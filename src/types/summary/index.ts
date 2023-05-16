export type SummaryTypes = {
    name: string;
    title: string;
    description: string;
    skills: string;
    socials: Array<{
        [key: string]: string;
    }>;
}

export type SummaryResponse = {
    name: string;
    title: string;
    description: Array<string>;
    skills: Array<string>;
    socials: Array<{
        [key: string]: string;
    }>;
}