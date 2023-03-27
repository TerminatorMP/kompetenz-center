import React from "react";
import Container from "../layout/Container";
import HeadingSection from "./HeadingSection";

import RettungsPlan from "../assets/images/rettungsplan.jpg";
import InfoStand from "../assets/images/info_stand.jpg";
import Extinguisher from "../assets/images/extinguisher.jpg";
import ButtonText from "./ButtonText";
import FromLeft from "./animation/FromLeft";


const Check = ({text, icon}) => {
    return (
        <div className="flex items-center mb-2 md:mb-6 text-lg md:text-2xl">
            <i className={icon + " text-red-600 mr-4 md:mr-8"}></i>
            <p className="">
                {text}
            </p>
        </div>
    )
}

const imgStyling = "absolute outline-offset-[10px] h-[270px] desktop:h-[240px] pad:h-[150px] phone:h-[110px] rounded-sm shadow-lg shadow-neutral-900/50 hover:outline hover:outline-[10px] hover:outline-red-600 hover:scale-110 hover:z-10 transition-all" +
    ""
export default function AllInOne() {
    return (
        <section id={"leistungen"} className="mt-16 mb-36 m-h-screen desktop:mb-8">
            <Container>
                <div className="mb-4">
                    <FromLeft>
                        <div className="text-red-600 font-semibold text-lg mb-2">
                            Alles was Sie brauchen
                        </div>
                        <HeadingSection>Aus einer Hand</HeadingSection>
                    </FromLeft>
                </div>
                <div className="flex pb-8 pt-8 desktop:flex-col">
                    <div className="w-full w-[50%] mt-2 desktop:w-full">
                        <FromLeft>
                            <Check text="Service" icon={"fa-solid fa-phone"}/>
                            <Check text="Wartung" icon={"fa-solid fa-toolbox"}/>
                            <Check text="Instandhaltung" icon={"fa-solid fa-screwdriver-wrench"}/>
                            <Check text="Pruefverstaendigen Abnahme" icon={"fa-solid fa-check"}/>
                            <Check text="Planung" icon={"fa-solid fa-compass-drafting"}/>
                            <Check text="Permanente Betreuung" icon={"fa-solid fa-clock"}/>
                            <span className="block mt-4 md:mt-12"/>
                            <ButtonText>Jetzt anfragen <i className={"fa-solid fa-arrow-right text-sm"}></i>
                            </ButtonText>
                        </FromLeft>
                    </div>

                    <div className="relative w-full mt-8 w-[50%] desktop:w-full desktop:h-[40vh]">
                        <img className={imgStyling + " top-0 left-0 desktop:top-10 desktop:left-0"} src={Extinguisher} alt="Feuerloescher"/>
                        <img className={imgStyling + " top-[15%] right-[0%] desktop:top-10 desktop:right-[10%] phone:right-[0%]"} src={RettungsPlan} alt="Rettungsplan"/>
                        <img className={imgStyling + " top-[45%] right-[30%] desktop:top-0 desktop:left-[30%]"} src={InfoStand} alt="Infostand"/>
                    </div>
                </div>
            </Container>
        </section>
    )
}