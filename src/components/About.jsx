import React from "react";
import HeadingSection from "./HeadingSection";
import Container from "../layout/Container";
import Text from "./typography/Text";

import auto from "../assets/images/auto.jpg";
import BaseMotion from "./animation/BaseMotion";
import FromLeft from "./animation/FromLeft";
import FromTop from "./animation/FromTop";
import FromRight from "./animation/FromRight";

export default function About() {
    return (
        <div className="relative isolate m-h-screen">
            <div className="absolute top-0 left-0 bg-neutral-900 w-full h-1/2 z-[-1]"/>
            <section className="isolate bg-transparent pt-24 pb-24 z-1">
                <div className="relative pt-24 pb-24">
                    <Container>
                        <FromLeft><HeadingSection>Uber uns</HeadingSection></FromLeft>
                        <div className="flex items-center justify-center">
                            <div className="w-[70%] pr-12">
                                <div className="mt-4"/>
                                <FromLeft>
                                    <Text>
                                        Seit [Gründungsjahr] arbeiten wir hart daran, den Brandschutz in Gebäuden jeder
                                        Größe und für jedes Bedürfnis zu optimieren. Unsere Techniker verfügen über
                                        umfassende Erfahrung in der Installation, Wartung und Überprüfung von
                                        Brandschutzsystemen und arbeiten mit einer Vielzahl von Marken und Systemen.
                                        <br/><br/>
                                        Wir verstehen, dass der Brandschutz für jeden Einzelnen von entscheidender
                                        Bedeutung
                                        ist. Daher legen wir großen Wert auf Zuverlässigkeit, Verantwortungsbewusstsein
                                        und
                                        eine enge Zusammenarbeit mit unseren Kunden. Unsere Techniker sind lizenziert
                                        und
                                        geschult, um sicherzustellen, dass jede Installation sicher und effektiv ist,
                                        und
                                        wir halten uns an alle geltenden Vorschriften und Sicherheitsstandards.
                                    </Text>
                                </FromLeft>
                            </div>
                            <div className="relative w-[40%] h-full isolate">
                                <FromRight>
                                    <img src={auto} alt="Firmenwagen" className="w-full h-full rounded-lg z-10"/>
                                    <div
                                        className="absolute top-2 left-2 w-full h-full rounded-lg bg-neutral-900 z-[-1]"/>
                                </FromRight>
                            </div>
                        </div>
                    </Container>
                    <div className="absolute top-0 left-0 h-full w-full bg-neutral-100 skew-y-3 z-[-1]"/>
                </div>
            </section>
            <div className="absolute bottom-0 left-0 bg-neutral-900 w-full h-1/2 z-[-1]"/>
        </div>
    )
}