"use client"

import { useRef, useState } from "react";

function Addquestion() {

  interface data 
  {
    success?: boolean;
    message?: string;
  }

  const redRef = useRef<HTMLInputElement>(null);
  const blueRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState<data>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const jsonData = {
      red: redRef.current?.value,
      blue: blueRef.current?.value
    };

    try {
      const res = await fetch("http://localhost:8000/addDilemma",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(jsonData)
        }
      );

      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error submitting dilemma: Could not connect to server", error);
    } finally {
      setLoading(false);
    }
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
            <button disabled={loading} type="submit" className="text-white font-bold bg-cyan-500 rounded p-4 hover:cursor-pointer disabled:bg-black disabled:cursor-not-allowed">Add Dilemma</button>
          </form>
        </div>
        {Object.keys(data).length > 0 && <div className="response-box bg-green-400 w-screen text-center mt-6 p-4 rounded">
           <p className="text-white font-bold">{data.message}</p>
        </div>}
      </div>
    </main>
  )
}

export default Addquestion