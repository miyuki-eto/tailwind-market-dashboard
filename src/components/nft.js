import React, {useEffect, useState} from "react";
import axios from "axios";

import NftCard from "./subcomponents/nftCard";

export default function NftData() {
    return (
        <div className="px-4 py-8 rounded-3xl max-w-full text-white bg-custom-bga shadow-inner">
            <h2 className="text-2xl font-medium mb-10 pl-1 md:pl-3">NFTs</h2>

            <div className="grid grid-cols-3 gap-4">
                <NftCard />
                <NftCard />
                <NftCard />
                <NftCard />

            </div>

        </div>
    );
}
