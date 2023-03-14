import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { CharData } from "../types/Types";

export default function ProfileCard({ info, status, equip }: CharData) {
    return (
        <div>
            <Image src={`https://img-api.neople.co.kr/df/servers/${info?.serverId}/characters/${info?.characterId}?zoom=3`} width={192} height={221} alt="캐릭터이미지"></Image>
            <Image src={`https://img-api.neople.co.kr/df/items/${equip[0].itemId}`} width={28} height={28} alt={equip[0].itemName}></Image>
        </div>
    );
}
