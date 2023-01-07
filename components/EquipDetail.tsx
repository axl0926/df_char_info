import React, { useState } from "react";
import { ItemSlot } from "../types/Types";

export default function EquipDetail({ SlotInfo }: { SlotInfo: ItemSlot }) {
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <>
            <h3 onClick={() => setShowDropdown(!showDropdown)}>장착 부위 : {SlotInfo.slotName}</h3>
            {showDropdown && (
                <>
                    <div>{`아이템 명 : ${SlotInfo.itemName}`}</div>
                    <div>{`아이템 타입 : ${SlotInfo.itemType}`}</div>
                    <div>{`아이템 레어리티 : ${SlotInfo.itemRarity}`}</div>
                </>
            )}
        </>
    );
}
