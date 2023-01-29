import axios from "axios";
import https from "https";
import crypto from "crypto";

// const api = axios.create({
//     baseURL: "https://api.neople.co.kr/df",
//     params: {
//         apikey: process.env.API_KEY,
//     },
//     httpsAgent: new https.Agent({
//         rejectUnauthorized: false,
//         secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
//     }),
// });
// const NeopleAPI = {
//     getServers: () => api.get("/servers"),
//     getCharacterList: (serverId: string, characterName: string) => api.get(`/servers/${serverId}/characters`, { params: { characterName: characterName } }),
//     getCharacterInfo: (serverId: string, characterId: string) => api.get(`/servers/${serverId}/characters${characterId}`),
// };

// export default NeopleAPI;
