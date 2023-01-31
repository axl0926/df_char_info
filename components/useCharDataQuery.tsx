// import { useQuery } from "react-query";
import { Status, CharInfo, CharStatus, EquipInfo } from "../types/Types";
import getApi from "../lib/neople";
import { useSuspendedQuery } from "@toss/react-query";

export default function useCharDataQuery({ serverId, characterName }: { serverId: string; characterName: string }) {
    const char_info_response = useSuspendedQuery<{ rows: CharInfo[] }>([`info_${serverId}_${characterName}`], () => getApi.getCharInfo(serverId, characterName));
    const [char_info] = char_info_response.data?.rows; 
    const char_status_response = useSuspendedQuery<CharStatus>([`status_${serverId}_${characterName}`], () => getApi.getCharStatus(serverId, char_info.characterId));
    const char_equip_response = useSuspendedQuery<EquipInfo>([`equip_${serverId}_${characterName}`], async () => getApi.getEquipInfo(serverId, char_info.characterId));
    const { status, ...char_status } = char_status_response.data; 
    const char_equip = char_equip_response?.data?.equipment;
    let statusObject: any = {};
    status.forEach((v: Status) => (statusObject[v.name] = v.value));
    const char_data = { info: { ...char_info, ...char_status }, status: statusObject, equip: char_equip };
    return char_data;
}
