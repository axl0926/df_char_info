import React, { Suspense, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import EquipDetail from "../components/EquipDetail";
import { CharInfo, CharStatus, ItemSlot } from "../types/Types";

export default function SelectedChar({ info, status, equip }: { info: any; status: any; equip: ItemSlot[] }) {
    return (
        <div id={styles.char_main}>
            <div id="info">
                <Image src={`https://img-api.neople.co.kr/df/servers/${info?.serverId}/characters/${info?.characterId}?zoom=3`} width={192} height={221} alt="캐릭터이미지"></Image>

                <h1>{info?.characterName}</h1>
                <div>레벨 : {info?.level}</div>
                {/* <div>Id:{info?.characterId}</div> */}
                <div>직업 : {info?.jobGrowName}</div>
                <div>모험단명 : {info?.adventureName}</div>
                <div>길드명 : {info?.guildName}</div>
                <div>모험가 명성 : {status["모험가 명성"]}</div>
                {/* {Object.entries(status).map((v, i) => {
                    return <div key={i}>{`${v[0]}:${v[1]}`}</div>;
                })} */}
            </div>
            <div id="char_item">
                {equip?.map((value, i) => {
                    return (
                        <Suspense key={i} fallback={<h1>loading..</h1>}>
                            <EquipDetail SlotInfo={value} />
                        </Suspense>
                    );
                })}
            </div>
            <div>{/* <ProfileCard info={info} status={status} equip={equip}/> */}</div>
        </div>
    );
}
