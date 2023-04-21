import React, { Suspense, useState } from "react";
import SelectServer from "../components/SelectServer";
import SearchCharacterList from "../components/SearchCharacterList";

export default function Home() {
    const [serverId, setServerId] = useState("cain");
    const [characterName, setCharacterName] = useState("");
    const [selectedCharacter, setSelectedCharacter] = useState<null | { serverId: string; characterName: string }>(null);
    const characterNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCharacterName(e.target.value);
    };
    const changeServer = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setServerId(e.target.value);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSelectedCharacter({ serverId: serverId, characterName: characterName });
    };

    return (
        <div>
            <SelectServer serverId={serverId} fc={changeServer} />
            <form onSubmit={handleSubmit}>
                <input type="text" value={characterName} onChange={characterNameChange} />
                <button type="submit">검색</button>
            </form>
            <div id="char_info">
                <Suspense fallback="loading...">{selectedCharacter && <SearchCharacterList selectedCharacter={selectedCharacter} />}</Suspense>
            </div>
        </div>
    );
}
