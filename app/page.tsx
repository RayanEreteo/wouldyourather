
import DilemmaHome from "./components/DilemmaHome";

export default async function Home() { 
  let baseData;

  try {
    const res = await fetch("http://localhost:8000/getDilemma")
    const data = await res.json()
    baseData = data
    console.log(data)
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <DilemmaHome baseData={baseData}/>
  );
}