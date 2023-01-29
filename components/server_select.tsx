import React from "react";
import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";

interface Server {
    serverId: string;
    serverName: string;
}

interface Servers {
    rows: Server[];
}

export default function SelectServer({ serverId, fc }: { serverId: string; fc: (e: React.ChangeEvent<HTMLSelectElement>) => void }) {
    const servers = useQuery<Servers, AxiosError>({ queryKey: ["df"], queryFn: async () => (await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/servers`)).data, suspense: true });

    return (
        <select value={serverId} id="server-select" onChange={fc}>
            {servers.data?.rows?.map((v: Server, i: number) => (
                <option key={i} value={v.serverId}>
                    {v.serverName}
                </option>
            ))}
        </select>
    );
}
