import axios from "axios";

const api = axios.create({
    baseURL: "/api",
});

const getApi = {
    getCharList: async (serverId: string, characterName: string) => (await api.get(`/servers/${serverId}/characters?characterName=${characterName}&wordType=full`)).data,
    getCharInfo: async (serverId: string, characterName: string) => (await api.get(`/servers/${serverId}/characters?characterName=${characterName}`)).data,
    getCharStatus: async (serverId: string, characterId: string) => (await api.get(`/servers/${serverId}/characters/${characterId}/status`)).data,
    getEquipInfo: async (serverId: string, characterId: string) => (await api.get(`/servers/${serverId}/characters/${characterId}/equip/equipment`)).data,
    getItemInfo: async (itemId: string) => (await api.get(`/items/${itemId}`)).data,
};

export default getApi;
