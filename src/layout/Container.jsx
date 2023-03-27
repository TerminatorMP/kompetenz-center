import React from "react";

export default function Container({children}) {
    return (
        <div className="mx-auto max-w-7xl px-8">
            {children}
        </div>
    )
}