import { useQuery } from "react-query";
import { Status, CharInfo, CharStatus, EquipInfo } from "../types/Types";
import getApi from "../lib/neople";

export default function useCharDataQuery({ serverId, characterName }: { serverId: string; characterName: string }) {
    const char_info_response = useQuery<{ rows: CharInfo[] }>({ queryKey: [`info_${serverId}_${characterName}`], queryFn: () => getApi.getCharInfo(serverId, characterName), suspense: true });
    const [char_info] = char_info_response.data?.rows!; //non-null assertion
    const char_status_response = useQuery<CharStatus>({ queryKey: [`status_${serverId}_${characterName}`], queryFn: () => getApi.getCharStatus(serverId, char_info.characterId), suspense: true });
    const char_equip_response = useQuery<EquipInfo>({ queryKey: [`equip_${serverId}_${characterName}`], queryFn: async () => getApi.getEquipInfo(serverId, char_info.characterId), suspense: true });
    const { status, ...char_status } = char_status_response.data!; //non-null assertion
    const char_equip = char_equip_response?.data?.equipment;
    let statusObject: any = {};
    status.forEach((v: Status) => (statusObject[v.name] = v.value));
    const char_data = { info: { ...char_info, ...char_status }, status: statusObject, equip: char_equip };
    return char_data;
}
