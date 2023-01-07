import React, { Suspense, useState } from "react";
import SelectServer from "../components/server_select";
import SearchCharacter from "../components/SearchCharacter";

import html2canvas from "html2canvas";

export default function Home() {
    const onCapture = () => {
        const char_info: HTMLElement | null = document.querySelector("#char_info");
        if (char_info) {
            html2canvas(char_info).then((canvas) => {
                document.body.appendChild(canvas);
            });
        }
    };
    const [ss, setSs] = useState(false);
    const [cc, setCc] = useState(false);
    return (
        <div>
            <h1>서버</h1>
            <button onClick={() => setSs(!ss)}>서버</button>
            {ss && (
                <Suspense fallback={<h1>로딩중............ </h1>}>
                    <SelectServer />
                </Suspense>
            )}
            <h1>캐릭</h1>
            <button onClick={() => setCc(!cc)}>캐릭</button>{" "}
            <div id="char_info">
                {cc && (
                    <Suspense fallback={<h1>로딩중... </h1>}>
                        <SearchCharacter />
                    </Suspense>
                )}
            </div>
            <button onClick={onCapture}>434</button>
        </div>
    );
}
