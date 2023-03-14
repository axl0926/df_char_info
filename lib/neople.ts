import axios from "axios";

const api = axios.create({
<<<<<<< HEAD
    baseURL: 'api'
=======
    baseURL: '/api'
>>>>>>> 8f02cf63c91f0614b4b7f7f3f61ce0bf6eddcfde
});
const getApi = {
    getCharInfo: async (serverId: string, characterName: string) => (await api.get(`/servers/${serverId}/characters?characterName=${characterName}`)).data,
    getCharStatus: async (serverId: string, characterId: string) => (await api.get(`/servers/${serverId}/characters/${characterId}/status`)).data,
    getEquipInfo: async (serverId: string, characterId: string) => (await api.get(`/servers/${serverId}/characters/${characterId}/equip/equipment`)).data,
    getItemInfo: async (itemId: string) => (await api.get(`/items/${itemId}`)).data,
};

export default getApi;
