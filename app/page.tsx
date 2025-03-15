import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <nav>
        <Navbar></Navbar>
      </nav>
      <div className="text-white">
        <main>
          <div className="red-choice flex justify-center items-center bg-red-500 w-[100vw] h-[50vh]">
            <div className="title text-center">
              <h1 className="question-title text-4xl w-[90vw]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A dolor labore magnam consequuntur delectus! Aut, ipsa!</h1>
            </div>
          </div>
          <div className="separator w-[100vw] h-1"></div>
          <div className="blue-choice flex justify-center items-center bg-blue-700 w-[100vw] h-[50vh]">
            <div className="title text-center">
              <h1 className="question-title text-4xl w-[90vw]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores error ipsum quos, officia hic accusamus odio?</h1>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}