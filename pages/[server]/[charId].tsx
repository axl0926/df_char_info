import React from "react";
import useCharQuery from "../../components/useCharQuery";
import SelectedChar from "../../components/SelectedChar";

import { useRouter } from "next/router";

export default function CharDetail() {
    const router = useRouter();
    const { server, charId } = router.query;
    console.log(server);
    console.log(charId);
    const { info, status, equip } = useCharQuery({ server, charId });
    
    return (
        <div>
            <SelectedChar info={info} status={status} equip={equip} />
        </div>
    );
}
