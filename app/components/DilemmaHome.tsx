"use client"

import { FormEvent, useState } from "react"
import Navbar from "./Navbar"

function DilemmaHome({ baseData }: any) {
    const [resultSended, setResultSended] = useState<boolean>(false)
    const [questionData, setQuestionData] = useState<object>(baseData)

    const conditionalHiding = {
        poleResult: resultSended ? {display: "block"} : {display: "none"},
        questionTitle: resultSended ? {display: "none"} : {display: "block"}
    }    

    function sendResult(e: FormEvent){
        if (resultSended) return

        e.preventDefault()
        setResultSended(true)
        console.log("sended !");
    }

    return (
        <>
            <nav>
                <Navbar></Navbar>
            </nav>
            <div className="text-white">
                <main>
                    <div className="red-choice flex justify-center items-center bg-red-500 w-[100vw] h-[50vh] hover:cursor-pointer" onClick={sendResult}>
                        <div className="choice-content text-center">
                            <h1 className="question-title text-4xl w-[90vw]" style={conditionalHiding.questionTitle}>Test</h1>
                            <h1 className="question-pole-result text-9xl" style={conditionalHiding.poleResult}>33</h1>
                        </div>
                    </div>
                    <div className="separator w-[100vw] h-1"></div>
                    <div className="blue-choice flex justify-center items-center bg-blue-700 w-[100vw] h-[50vh] hover:cursor-pointer" onClick={sendResult}>
                        <div className="title text-center">
                            <h1 className="question-title text-4xl w-[90vw]" style={conditionalHiding.questionTitle}>Test</h1>
                            <h1 className="question-pole-result text-9xl" style={conditionalHiding.poleResult}>33</h1>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default DilemmaHome