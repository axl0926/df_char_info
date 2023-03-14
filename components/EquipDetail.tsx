import React, { useState } from "react";
import { ItemSlot, Status } from "../types/Types";
import Image from "next/image";
import styles from "../styles/item.module.css";
import getApi from "../lib/neople";
import { useSuspendedQuery } from "@toss/react-query";

export default function EquipDetail({ SlotInfo }: { SlotInfo: ItemSlot }) {
    const [showDropdown, setShowDropdown] = useState(false);

    const itemClass = SlotInfo.growInfo && (SlotInfo.growInfo.total.level >= 320 ? "over320" : SlotInfo.growInfo.total.level >= 280 ? "over280" : SlotInfo.growInfo.total.level >= 240 ? "over240" : false);
    const queryKey = `item_${SlotInfo.itemId}`;
    const { itemStatus } = useSuspendedQuery<any>([queryKey], () => getApi.getItemInfo(SlotInfo.itemId)).data;
    const 명성 = itemStatus.find((stat: Status) => stat.name === "모험가 명성");
    return (
        <div className={styles.itemBox}>
            <div onClick={() => setShowDropdown(!showDropdown)} className={` ${styles.item_icon} ${itemClass ? styles[itemClass] : styles.normal}`}>
                <Image src={`https://img-api.neople.co.kr/df/items/${SlotInfo.itemId}`} width={28} height={28} alt={SlotInfo.itemName}></Image>
            </div>
            {showDropdown && (
                <div>
                    <div>{SlotInfo.itemName}</div>
                    <div>{SlotInfo.itemRarity}</div>
                    <div>기본 명성: {명성.value}</div>
                    {SlotInfo.enchant && SlotInfo.enchant.status.map((v, i) => <div key={i}>{`${v.name}:${v.value}`}</div>)}
                    {SlotInfo.bakalInfo && <div>바칼 융합 : 명성 700</div>}
                    {(SlotInfo.machineRevolutionInfo || SlotInfo.dimensionCloisterInfo || SlotInfo.ispinsInfo) && <div>장비 융합 : 명성 350</div>}
                    {SlotInfo.growInfo && (
                        <>
                            <div>1옵션 Lv{SlotInfo?.growInfo?.options[0].level}</div>
                            <div>2옵션 Lv{SlotInfo?.growInfo?.options[1].level}</div>
                            <div>3옵션 Lv{SlotInfo?.growInfo?.options[2].level}</div>
                            <div>4옵션 Lv{SlotInfo?.growInfo?.options[3].level}</div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
