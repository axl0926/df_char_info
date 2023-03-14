// import { useQuery } from "react-query";
import { Status, CharInfo, CharStatus, EquipInfo,CharData} from "../types/Types";
import getApi from "../lib/neople";
import { useSuspendedQuery } from "@toss/react-query";

export default function useCharDataQuery({ serverId, characterName }: { serverId: string; characterName: string }):CharData {
    const charInfoRes = useSuspendedQuery<{ rows: CharInfo[] }>([`info_${serverId}_${characterName}`], () => getApi.getCharInfo(serverId, characterName));
    if(!charInfoRes.data.rows.length){
        throw new Error("Character not found");
    }
    const [charInfo] = charInfoRes.data?.rows; 
    const charStatusRes = useSuspendedQuery<CharStatus>([`status_${serverId}_${characterName}`], () => getApi.getCharStatus(serverId, charInfo.characterId));
    const charEquipRes = useSuspendedQuery<EquipInfo>([`equip_${serverId}_${characterName}`], async () => getApi.getEquipInfo(serverId, charInfo.characterId));
   
    
    const { status, ...charStatus } = charStatusRes.data; 

    
    const charEquip = charEquipRes?.data?.equipment;

    let statusObject: any = {};
    status.forEach((v: Status) => (statusObject[v.name] = v.value));
    const char_data = { info: { ...charInfo, ...charStatus }, status: statusObject, equip: charEquip };
    console.log(char_data.equip);
    return char_data;
}
