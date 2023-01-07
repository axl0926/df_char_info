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

export default function SelectServer() {
    const servers = useQuery<Servers, AxiosError>({ queryKey: ["df"], queryFn: async () => (await axios.get(`http://127.0.0.1:8000/df/servers`)).data, suspense: true });

    return (
        <select name="servers" id="server-select">
            {servers.data?.rows?.map((v: Server, i: number) => (
                <option key={i} value={v.serverId}>
                    {v.serverName}
                </option>
            ))}
        </select>
    );
}
