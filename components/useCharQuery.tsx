// import { useQuery } from "react-query";
import { Status, CharStatus, EquipInfo} from "../types/Types";
import getApi from "../lib/neople";
import { useSuspendedQuery } from "@toss/react-query";

export default function useCharDataQuery({ server, charId }: { server: string; charId: string }) {


    const charStatusRes = useSuspendedQuery<CharStatus>([`status_${server}_${charId}`], () => getApi.getCharStatus(server, charId));
    const charEquipRes = useSuspendedQuery<EquipInfo>([`equip_${server}_${charId}`],  () => getApi.getEquipInfo(server, charId));
    
    const { status, ...charStatus } = charStatusRes.data;      
    const charEquip = charEquipRes?.data?.equipment;

    let statusObject: any = {};
    status.forEach((v: Status) => (statusObject[v.name] = v.value));
    const char_data = { info: {serverId:server,...charStatus }, status: statusObject, equip: charEquip };
    return char_data;
}
