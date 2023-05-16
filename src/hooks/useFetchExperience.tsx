import { ExperienceTypes } from '@/components/Experience';
import api, { METHOD } from '@/utils/api';
import { useEffect, useState } from 'react';

type ExperienceResponse = Array<ExperienceTypes>;

const getExperienceData = async (): Promise<ExperienceResponse> => {
    const response = await api<ExperienceResponse>({ method: METHOD.GET, uri: "experience.json" });
    return response;
}

export default function useFetchExperience() {
    const [experience, setExperience] = useState<ExperienceResponse>([]);
    useEffect(() => {
        if (!experience.length) {
            const fn = async () => {
                const data = await getExperienceData();
                setExperience(data);
            }
            fn();
        }
    }, [experience.length, setExperience]);

    return {
        experience
    };
}