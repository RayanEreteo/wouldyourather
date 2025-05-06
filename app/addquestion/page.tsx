"use client"

import { useRef } from "react";

function Addquestion() {

  const redRef = useRef<HTMLInputElement>(null);
  const blueRef = useRef<HTMLInputElement>(null);

 async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const jsonData = {
      red: redRef.current?.value,
      blue: blueRef.current?.value
    };

    const res = await fetch("http://localhost:8000/addDilemma", 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonData)
      }
    )

    const data = await res.json();
    console.log(data);
  }

  return (
    <main>
      <div className="addquestion flex flex-col justify-center items-center h-screen w-screen bg-gradient-to-b from-red-600 to-blue-700">
        <h1 className="text-white font-extrabold text-3xl mb-6">Add Dilemma</h1>
        <div className="form-container bg-indigo-800 rounded p-3">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input ref={redRef} className="mb-6 bg-white rounded p-4" type="text" name="question" placeholder="Red" required />
            <h1 className="text-center text-white text-xl">OR</h1>
            <input ref={blueRef} className="mt-6 mb-6 bg-white rounded p-4" type="text" name="answer" placeholder="Blue" required />
            <button type="submit" className="text-white font-bold bg-cyan-500 rounded p-4 hover:cursor-pointer">Add Dilemma</button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Addquestion