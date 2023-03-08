import React from "react";
import BaseMotion from "./BaseMotion";

const boxVariants = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, x: 100 }
}
export default function FromRight({children}) {
    return (
        <BaseMotion boxVariants={boxVariants}>
            {children}
        </BaseMotion>
    )
}