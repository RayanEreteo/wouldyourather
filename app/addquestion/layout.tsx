import { Metadata } from "next";
import Addquestion from "./page";

export const metadata: Metadata = {
    title: "Would You Rather | Add Question",
    description: "A simple game of would you rather",
  };

function layout(){
    return (
        <Addquestion />
    )
}

export default layout