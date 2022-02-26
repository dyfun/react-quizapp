import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Main from "./components/Main";
import { useContext } from "react";
import { QuizContext } from "./context/Question/QuestionContext";

const App = () => {
  const { isLoaded, quizzes, quizID, setQuizID, totalScore, updateScore } = useContext(QuizContext);
  return (
    <>
      {
        isLoaded ? (<div className="container mx-auto bg-gray-400 pt-8 mt-8 rounded" >
          <Header />
          <Main quizzes={quizzes} quizID={quizID} setQuizID={setQuizID} totalScore={totalScore} updateScore={updateScore} />
          <Footer />
        </div >) : "Loading"
      }
    </>
  )
}

export default App