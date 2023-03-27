import React from "react";

const types = {
    light: ["text-white"],
    dark: ["text-black"]
}
export default function Text({children, type = "dark"}) {

    return (
        <p className={types[type] + " text-md md:text-lg"}>
            {children}
        </p>
    )
}