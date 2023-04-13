// import { useQuery } from "react-query";
import { CharInfo, CharData } from "../types/Types";
import getApi from "../lib/neople";
import { useSuspendedQuery } from "@toss/react-query";

export default function useCharDataQuery({ serverId, characterName }: { serverId: string; characterName: string }) {
    const charList = useSuspendedQuery<{ rows: CharInfo[] }>([`info_${serverId}_${characterName}`], () => getApi.getCharList(serverId, characterName));

    return charList;
}
