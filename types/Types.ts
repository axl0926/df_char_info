export interface CharInfo extends DefaultCharInfo {
    serverId: string;
}
interface DefaultCharInfo {
    characterId: string;
    characterName: string;
    level: number;
    jobId: string;
    jobGrowId: string;
    jobName: string;
    jobGrowName: string;
}

interface Status {
    name: string;
    value: number;
}
interface Buff {
    name: string;
    level?: number;
    status: Status[];
}
export interface CharStatus extends DefaultCharInfo {
    adventureName: string;
    guildId: string;
    guildName: string;
    buff: Buff[];
    status: Status[];
}
export interface EquipInfo extends DefaultCharInfo {
    adventureName: string;
    guildId: string;
    guildName: string;
    equipment: ItemSlot[];
}
export interface ItemSlot {
    slotId: string; //슬롯ID
    slotName: string; //슬롯이름
    itemId: string; //아이템ID
    itemName: string; //아이템명
    itemType: string; //아이템분류
    itemTypeDetail: string; //아이템세부분류
    itemAvailableLevel: number; //장착가능레벨
    itemRarity: string; //레어리티
    setItemId: string | null; // 세트
    setItemName: string | null; //세트
    reinforce: number | null; //강화
    itemGradeName?: string; //등급
    enchant?: {
        status?: {
            name: string;
            value: number;
        }[];
    };
    amplificationName: string | null; //증폭
    refine: number;
    ispinsInfo?: FusionItemInfo; // 이스핀즈융합
    machineRevolutionInfo?: FusionItemInfo; //기계혁명융합
    bakalInfo?: FusionItemInfo; //바칼무기융합
    dimensionCloisterInfo: FusionItemInfo; //회랑융합
    upgradeInfo?: { itemId: string; itemName: string }; // 융합정보
    growInfo?: {
        total: {
            damage: number; //피증
            buff: number; //버프력
            level: number; //레벨합
        };
        options: {
            level: number;
            expRate: number;
            explain: string;
            explainDetail: string;
            damage: number;
            buff: number;
        }[];
    }; //성장정보

    engraveName?: boolean; //이명각인권
}

interface FusionItemInfo {
    options: {
        damage?: number;
        buff: number;
        explain: string;
        explainDetail: string;
    }[];
}
