import React, { useState } from "react";
import { ItemSlot } from "../types/Types";
import Image from "next/image";

export default function EquipDetail({ SlotInfo }: { SlotInfo: ItemSlot }) {
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <>
            <h3 onClick={() => setShowDropdown(!showDropdown)}>장착 부위 : {SlotInfo.slotName}</h3>
            {showDropdown && (
                <>
                    <Image src={`https://img-api.neople.co.kr/df/items/${SlotInfo.itemId}`} width={28} height={28} alt={SlotInfo.itemName}></Image>
                    <div>{`아이템 명 : ${SlotInfo.itemName}`}</div>
                    <div>{`아이템 타입 : ${SlotInfo.itemType}`}</div>
                    <div>{`아이템 레어리티 : ${SlotInfo.itemRarity}`}</div>
                </>
            )}
        </>
    );
}
