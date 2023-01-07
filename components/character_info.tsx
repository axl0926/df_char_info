import React from "react";
import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";

interface Character {
    serverId: string;
    characterId: string;
    characterName: string;
    level: number;
    jobId: string;
    jobGrowId: string;
    jobName: string;
    jobGrowName: string;
}

interface Characters {
    rows: Character[];
}

export default function ServerSelect() {
    const test = { serverId: "cain", characterName: "븜빠따" };
    const character = useQuery<Characters, AxiosError>({ queryKey: ["df"], queryFn: async () => (await axios.get(`http://127.0.0.1:8000/df/servers/${test.serverId}/characters?characterName=${test.characterName}`)).data, suspense: true });

    return (
        <>
            <h1>{character?.data?.rows[0].characterName}</h1>
            <div>level:{character?.data?.rows[0].level}</div>
            <div>jobGrowName:{character?.data?.rows[0].jobGrowName}</div>
        </>
    );
}
