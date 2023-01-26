import React, { useState } from "react";
import { ItemSlot } from "../types/Types";
import Image from "next/image";
import styles from "../styles/item.module.css";

export default function EquipDetail({ SlotInfo }: { SlotInfo: ItemSlot }) {
    const [showDropdown, setShowDropdown] = useState(false);

    const itemClass = SlotInfo.growInfo && (SlotInfo.growInfo.total.level >= 320 ? "over320" : SlotInfo.growInfo.total.level >= 280 ? "over280" : SlotInfo.growInfo.total.level >= 240 ? "over240" : false);
    return (
        <div className={styles.itemBox}>
            <div onClick={() => setShowDropdown(!showDropdown)} className={` ${styles.item_icon} ${itemClass ? styles[itemClass] : styles.normal}`}>
                <Image src={`https://img-api.neople.co.kr/df/items/${SlotInfo.itemId}`} width={28} height={28} alt={SlotInfo.itemName}></Image>
            </div>
            {showDropdown && (
                <div>
                    <div>{` ${SlotInfo.itemName}`}</div>
                    <div>{` ${SlotInfo.itemRarity}`}</div>
                </div>
            )}
        </div>
    );
}
