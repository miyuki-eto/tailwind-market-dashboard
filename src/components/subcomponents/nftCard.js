import React, {useState, useRef} from "react";

export default function NftCard() {

    return (
        <div className="rounded-3xl bg-custom-bg w-auto px-4 py-4 shadow-lg space-y-2">
            <p>image</p>
            <p className="text-xl text-pink-200">project</p>
            <div className="flex justify-between">
                <p>floor price</p>
                <p>percent change</p>
            </div>
        </div>
    );
}
