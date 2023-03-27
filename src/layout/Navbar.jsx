import React, {useEffect, useState} from 'react';
import Container from "./Container";

const Link = ({children, href}) => {
    return (
        <a className="ml-8 text-neutral-300 cursor-pointer hover:text-neutral-100" href={href}>{children}</a>
    )
}

const baseStyle = "fixed top-0 left-0 h-[70px] w-full p-4 z-50 transition-all duration-300 "
const siteStyle = baseStyle + "bg-neutral-900 shadow-md shadow-neutral-900/70"
const transparentStyle = baseStyle + "bg-transparent"

export default function Navbar() {
    const [navStyle, setNavStyle] = useState(transparentStyle)

    useEffect(() => {
        const handleScroll = () => {
            const offsetBuffer = 200
            const isAtTop = window.scrollY < offsetBuffer

            setNavStyle(isAtTop ? transparentStyle : siteStyle)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <nav className={navStyle}>
            <Container>
                <div className="text-lg font-semibold flex items-center justify-between">
                    <i className={"text-red-600 text-3xl fa-solid fa-fire-flame-curved"}></i>
                    <div>
                        <Link href={"#"}>Home</Link>
                        <Link href={"#feature"}>Leistung</Link>
                        <Link href={"#contact"}>Kontakt</Link>
                    </div>
                </div>
            </Container>
        </nav>
    )
}