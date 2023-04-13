import React from "react";
interface Server {
    serverId: string;
    serverName: string;
}
const servers = [
    { serverId: "cain", serverName: "카인" },
    { serverId: "diregie", serverName: "디레지에" },
    { serverId: "siroco", serverName: "시로코" },
    { serverId: "prey", serverName: "프레이" },
    { serverId: "casillas", serverName: "카시야스" },
    { serverId: "hilder", serverName: "힐더" },
    { serverId: "anton", serverName: "안톤" },
    { serverId: "bakal", serverName: "바칼" },
];

export default function SelectServer({ serverId, fc }: { serverId: string; fc: (e: React.ChangeEvent<HTMLSelectElement>) => void }) {
    return (
        <select value={serverId} id="server-select" onChange={fc}>
            {servers.map((v: Server, i: number) => (
                <option key={i} value={v.serverId}>
                    {v.serverName}
                </option>
            ))}
        </select>
    );
}
