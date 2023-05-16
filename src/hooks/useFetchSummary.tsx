import { SummaryResponse, SummaryTypes } from "@/types/summary";
import api, { METHOD } from "@/utils/api";
import { concatArrayOfStringToSingleString } from "@/utils/array";
import { useEffect, useState } from "react";

const getSummaryData = async (): Promise<SummaryResponse> => {
    const response = await api<SummaryResponse>({ 
        method: METHOD.GET, uri: "json/summary.json" });
    return response;
}

export default function useFetchSummary() {
    const [summary, setSummary] = useState<SummaryTypes>({} as SummaryTypes);

    useEffect(() => {
        if (!Object.keys(summary).length) {
            const fn = async () => {
                const data = await getSummaryData();
                setSummary({
                    name: data.name,
                    title: data.title,
                    description: concatArrayOfStringToSingleString(data.description, " "),
                    skills: concatArrayOfStringToSingleString(data.skills, ", "),
                    socials: data.socials
                });
            };
            fn();
        }
    },[summary]);

    return { summary };
};