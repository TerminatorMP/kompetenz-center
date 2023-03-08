import React from "react";
import BaseMotion from "./BaseMotion";

const boxVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: -100 }
}
export default function FromTop({children}) {
    return (
        <BaseMotion boxVariants={boxVariants}>
            {children}
        </BaseMotion>
    )
}