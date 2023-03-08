import React, {useEffect} from "react";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";


export default function BaseMotion({children, boxVariants}) {
    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            control.start("visible")
        }
    }, [inView, control])

    return (
        <motion.div
            className={"box"}
            ref={ref}
            animate={control}
            initial={"hidden"}
            variants={boxVariants}
        >
            {children}
        </motion.div>
    )
}