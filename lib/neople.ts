import { useQuery } from "react-query";
import axios from "axios";
import { Status, CharInfo, CharStatus, EquipInfo } from "../types/Types";

const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/servers`,
});

const getApi = {
    getCharInfo: async (serverId: string, characterName: string) => (await api.get(`/${serverId}/characters?characterName=${characterName}`)).data,
    getCharStatus: async (serverId: string, characterId: string) => (await api.get(`/${serverId}/characters/${characterId}/status`)).data,
    getEquipInfo: async (serverId: string, characterId: string) => (await api.get(`/${serverId}/characters/${characterId}/equip/equipment`)).data,
};
export default getApi;
