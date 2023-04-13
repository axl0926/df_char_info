import React, { Suspense, useState } from "react";
import {ErrorBoundary,FallbackProps} from 'react-error-boundary'
import SelectServer from "../components/SelectServer";
import SearchCharacterList from "../components/SearchCharacterList";

function ErrorFallback({error, resetErrorBoundary}:FallbackProps) {
    return (
      <div >
        <p>Error:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    )
  }

export default function Home() {
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
                <Suspense fallback="loading...">
                    {isFirstSearch && (
                        <ErrorBoundary  FallbackComponent={ErrorFallback}>
                            <SearchCharacterList selectedCharacter={selectedCharacter} />{" "}
                        </ErrorBoundary>
                    )}
                </Suspense>
            </div>
        </div>
    );
}
