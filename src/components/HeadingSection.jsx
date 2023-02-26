import React from "react";

const types = {
    light: ["text-white"],
    dark: ["text-black"],
    red: ["text-red-600"]
}
export default function HeadingSection({children, type}) {

    return (
        <h2 className={types[type] + " text-3xl uppercase font-semibold tracking-wide md:text-5xl lg:text-5xl"}>
            {children}
        </h2>
    )
}