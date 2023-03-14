import axios from "axios";

const api = axios.create({
    baseURL: 'api'
});
const getApi = {
    getCharInfo: async (serverId: string, characterName: string) => (await axios.get(`/api/servers/${serverId}/characters?characterName=${characterName}`)).data,
    getCharStatus: async (serverId: string, characterId: string) => (await axios.get(`/api/servers/${serverId}/characters/${characterId}/status`)).data,
    getEquipInfo: async (serverId: string, characterId: string) => (await axios.get(`/api/servers/${serverId}/characters/${characterId}/equip/equipment`)).data,
    getItemInfo: async (itemId: string) => (await axios.get(`/api/items/${itemId}`)).data,
};

export default getApi;
