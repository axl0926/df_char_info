import { useQuery } from "react-query";
import axios, { AxiosError } from "axios";
import { Status, CharInfo, CharStatus, EquipInfo } from "../types/Types";

export default function useCharDataQuery({ selectedCharacter }: { selectedCharacter: { serverId: string; characterName: string } }) {
    const char_info_response = useQuery<{ rows: CharInfo[] }, AxiosError>({ queryKey: [`char_info_${selectedCharacter.serverId}_${selectedCharacter.characterName}`], queryFn: async () => (await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/servers/${selectedCharacter.serverId}/characters?characterName=${selectedCharacter.characterName}`)).data, suspense: true });
    const char_info = char_info_response?.data?.rows[0];
    const char_status_response = useQuery<CharStatus, AxiosError>({ queryKey: [`char_status_${selectedCharacter.serverId}_${selectedCharacter.characterName}`], queryFn: async () => (await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/servers/${char_info?.serverId}/characters/${char_info?.characterId}/status`)).data, suspense: true });

    const { status, ...char_status } = char_status_response?.data!; //non-null assertion 사용
    const char_equip_response = useQuery<EquipInfo, AxiosError>({ queryKey: [`char_equip_${selectedCharacter.serverId}_${selectedCharacter.characterName}`], queryFn: async () => (await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/servers/${char_info?.serverId}/characters/${char_info?.characterId}/equip/equipment`)).data, suspense: true });
    const char_equip = char_equip_response?.data?.equipment;

    let statusObject: any = {};
    status.forEach((v: Status) => (statusObject[v.name] = v.value));
    const char_data = { info: { ...char_info, ...char_status }, status: statusObject, equip: char_equip };
    return char_data;
}
