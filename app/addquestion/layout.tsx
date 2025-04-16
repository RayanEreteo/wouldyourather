import { Metadata } from 'next';
import Addquestion from './page';

export const metadata: Metadata = {
    title: "Would You Rather | Add Dilemma",
    description: "Add your personal 'Would You Rather' Dilemma ",
};

function AddQuestionLayout() {
  return (
    <Addquestion></Addquestion>
  )
}

export default AddQuestionLayout