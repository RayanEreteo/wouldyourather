"use client"

// TODO : - Mettre a jour la valeur coté client quand on envoie l’incrémentation au serveur.
// TODO : - Mettre un chargement lors de l'envoi de la valeur.
// TODO : - Redirection a une page erreur si serveur indisponible.

import { FormEvent, useState } from "react"
import Navbar from "./Navbar"

function DilemmaHome({ baseData }: any) {
    const [resultSended, setResultSended] = useState<boolean>(false)

    const conditionalHiding = {
        poleResult: resultSended ? { display: "block" } : { display: "none" },
        questionTitle: resultSended ? { display: "none" } : { display: "block" }
    }

    async function sendResult(e: FormEvent, color: string) {
        if (resultSended) return
        setResultSended(true)

        const data = {
            id: baseData.returnedDilemma.id,
            color: color
        }

        try {
            await fetch("http://localhost:8000/setDilemmaClicks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
        } catch (error) {

        }
    }

    return (
        <>
            <nav>
                <Navbar></Navbar>
            </nav>
            <div className="text-white">
                <main>
                    <div className="red-choice flex justify-center items-center bg-red-500 w-[100vw] h-[50vh] hover:cursor-pointer" onClick={(e) => sendResult(e, "red_click")}>
                        <div className="choice-content text-center">
                            <h1 className="question-title text-4xl w-[90vw]" style={conditionalHiding.questionTitle}>{baseData.returnedDilemma.red}</h1>
                            <h1 className="question-pole-result text-9xl" style={conditionalHiding.poleResult}>{baseData.returnedDilemma.red_click}</h1>
                        </div>
                    </div>
                    <div className="separator w-[100vw] h-1"></div>
                    <div className="blue-choice flex justify-center items-center bg-blue-700 w-[100vw] h-[50vh] hover:cursor-pointer" onClick={(e) => sendResult(e, "blue_click")}>
                        <div className="title text-center">
                            <h1 className="question-title text-4xl w-[90vw]" style={conditionalHiding.questionTitle}>{baseData.returnedDilemma.blue}</h1>
                            <h1 className="question-pole-result text-9xl" style={conditionalHiding.poleResult}>{baseData.returnedDilemma.blue_click}</h1>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default DilemmaHome