import React, { Suspense, useState, useRef } from "react";
import SelectServer from "../components/server_select";
// import Loading from "../components/Loading";
import SearchCharacter from "../components/SearchCharacter";
import styles from "../styles/Home.module.css";

import html2canvas from "html2canvas";

export default function Home() {
    const onCapture = () => {
        const char_info: HTMLElement | null = document.querySelector("#char_info");
        if (char_info) {
            html2canvas(char_info).then((canvas) => {
                return canvas;
            });
        } else {
            return <h1>로딩중</h1>;
        }
    };
    const [serverId, setServerId] = useState("cain");
    const [characterName, setCharacterName] = useState("");
    const [selectedCharacter, setSelectedCharacter] = useState({ serverId: serverId, characterName: characterName });
    const characterNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setCharacterName(value);
    };
    const changeServer = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setServerId(e.target.value);
    };
    const [isFirstSearch, setIsFirstSearch] = useState(false);
    return (
        <div>
            <Suspense fallback={<h1>loading..</h1>}>
                <SelectServer serverId={serverId} fc={changeServer} />
            </Suspense>
            <input
                type="text"
                value={characterName}
                onChange={characterNameChange}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        setSelectedCharacter({ serverId: serverId, characterName: characterName });
                        !isFirstSearch && setIsFirstSearch(true);
                    }
                }}
            />
            <button
                onClick={() => {
                    setSelectedCharacter({ serverId: serverId, characterName: characterName });
                    !isFirstSearch && setIsFirstSearch(true);
                }}>
                검색
            </button>
            <div id="char_info">
                <Suspense fallback="loading..."> {isFirstSearch && <SearchCharacter selectedCharacter={selectedCharacter} />}</Suspense>
            </div>
            <button className={styles.capture_button} onClick={onCapture}>
                캡쳐
            </button>
        </div>
    );
}
