import React from "react";
import fire from "../assets/images/fire.png";
import Button from "./Button";
import ButtonOutlined from "./ButtonOutline";

export default function Hero() {
    return (
        <div className="bg-neutral-900 relative isolate w-full h-[80vh]">
            <div className="absolute top-1/3 left-[15%]">
                <h1 className="mt-10 text-6xl font-bold tracking-tight text-gray-100 sm:text-7xl">
                    Kompetenz Center
                </h1>
                <p className="mt-6 text-4xl font-light leading-8 text-gray-300">
                    Ihr Brandschutzexperte aus Cottbus
                </p>
                <div className="mt-12 flex">
                    <Button>Kontakt</Button>
                    <ButtonOutlined clazz="ml-4">Leistungen</ButtonOutlined>
                </div>
            </div>
            <div className="absolute top-0 right-0 overflow-hidden z-[-1] h-full w-[60%]">
                <div className="absolute top-0 right-0 z-10 h-full w-full bg-gradient-to-r from-neutral-900 to-neutral-900/0"/>
                <img
                    src={fire}
                    alt="Feuerloescher an der Wand"
                    className="absolute top-0 left-0 object-cover h-full w-full"
                />
            </div>
        </div>
    )
}
