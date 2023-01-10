import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import Image from "next/image";
import { CharInfo, CharStatus, EquipInfo } from "../types/Types";
import styles from "../styles/Home.module.css";
import EquipDetail from "../components/EquipDetail";

export default function SearchCharacter({ selectedCharacter }: { selectedCharacter: { serverId: string; characterName: string } }) {
    const char_info_response = useQuery<{ rows: CharInfo[] }, AxiosError>({ queryKey: ["char_info"], queryFn: async () => (await axios.get(`http://127.0.0.1:8000/df/servers/${selectedCharacter.serverId}/characters?characterName=${selectedCharacter.characterName}`)).data, suspense: true });
    const char_info = char_info_response?.data?.rows[0];
    const char_status_response = useQuery<CharStatus, AxiosError>({ queryKey: ["char_status"], queryFn: async () => (await axios.get(`http://127.0.0.1:8000/df/servers/${char_info?.serverId}/characters/${char_info?.characterId}/status`)).data, suspense: true });
    const char_status = char_status_response?.data;
    const char_equip_response = useQuery<EquipInfo, AxiosError>({ queryKey: ["char_equip"], queryFn: async () => (await axios.get(`http://127.0.0.1:8000/df/servers/${char_info?.serverId}/characters/${char_info?.characterId}/equip/equipment`)).data, suspense: true });
    const char_equip = char_equip_response?.data?.equipment;

    let status: any = {};
    char_status?.status.forEach((v) => {
        status[v.name] = v.value;
    });
    console.log(char_equip);

    return (
        <div id={styles.char_main}>
            <div id="char_info">
                <Image src={`https://img-api.neople.co.kr/df/servers/${char_info?.serverId}/characters/${char_info?.characterId}?zoom=3`} width={192} height={221} alt="캐릭터이미지"></Image>

                <h1>{char_info?.characterName}</h1>
                <div>레벨:{char_info?.level}</div>
                {/* <div>Id:{char_info?.characterId}</div> */}
                <div>직업:{char_info?.jobGrowName}</div>
                <div>모험단명:{char_status?.adventureName}</div>
                <div>길드명:{char_status?.guildName}</div>
                {Object.entries(status).map((v, i) => {
                    return <div key={i}>{`${v[0]}:${v[1]}`}</div>;
                })}
            </div>
            <div id="char_item">
                {char_equip?.map((value, i) => {
                    return <EquipDetail key={i} SlotInfo={value} />;
                })}
            </div>
        </div>
    );
}
