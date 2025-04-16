import fs from "fs"
import path from "path";
import DilemmaHome from "./components/DilemmaHome";

export default function Home() {
  const filePath = path.join(process.cwd(), "/public/dummydata.json")
  const fileData = fs.readFileSync(filePath, "utf8")
  const data = JSON.parse(fileData)

  console.log(data);
  

  return (
    <DilemmaHome baseData={data}/>
  );
}