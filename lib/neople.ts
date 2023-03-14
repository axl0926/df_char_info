import axios from "axios";

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? `${window.location.protocol}//${window.location.host}/api` : '/api'
});
const getApi = {
    getCharInfo: async (serverId: string, characterName: string) => (await api.get(`/api/servers/${serverId}/characters?characterName=${characterName}`)).data,
    getCharStatus: async (serverId: string, characterId: string) => (await api.get(`/api/servers/${serverId}/characters/${characterId}/status`)).data,
    getEquipInfo: async (serverId: string, characterId: string) => (await api.get(`/api/servers/${serverId}/characters/${characterId}/equip/equipment`)).data,
    getItemInfo: async (itemId: string) => (await api.get(`/api/items/${itemId}`)).data,
};

export default getApi;
