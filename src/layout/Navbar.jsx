import React from 'react';
import Container from "./Container";

const Link = ({children}) => {
    return (
        <a className="ml-8 text-neutral-300 cursor-pointer hover:text-neutral-100">{children}</a>
    )
}
export default function Navbar() {


    return (
        <nav className="bg-neutral-900 shadow-md shadow-neutral-900/70 fixed top-0 left-0 h-[70px] w-full p-4 z-50">
            <Container>
                <div className="text-lg font-semibold flex items-center justify-between">
                    <i className={"text-red-600 text-3xl fa-solid fa-fire-flame-curved"}></i>
                    <div>
                        <Link>Home</Link>
                        <Link>Leistung</Link>
                        <Link>Kontakt</Link>
                    </div>
                </div>
            </Container>
        </nav>
    )
}