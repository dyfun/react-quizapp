import axios from "axios";
import { createContext, useState, useEffect } from "react";

interface AppContextInterface {
    totalScore: number,
    setTotalScore: () => void,
    updateScore: (isCorrect: boolean) => void,
    resetScore: () => void,
}

interface IQuiz {
    category: string,
    correct_answer: string,
    incorrect_answer: string[],
    question: string,
    type: string
}

export const QuizContext = createContext<AppContextInterface | any>(null);

const QuizContextProvider = (props: any) => {
    const [quizzes, setQuizzes] = useState<IQuiz[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [quizID, setQuizID] = useState<number>(0);

    const [totalScore, setTotalScore] = useState<number>(0);

    const updateScore = (isCorrect: boolean) => {
        if (isCorrect) {
            setTotalScore((total: number) => total + 10);
        }
    }


    const fetchQuestion = async () => {
        try {
            const questions = await axios.get("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple");
            setQuizzes(questions.data.results);
            setIsLoaded(true);
        } catch (error: any) {
            console.log(error.log);
        }
    }

    useEffect(() => {
        fetchQuestion();
    }, []);

    return (
        <QuizContext.Provider value={{
            totalScore,
            setTotalScore,
            updateScore,
            fetchQuestion,
            quizzes,
            isLoaded,
            quizID,
            setQuizID
        }}>
            {props.children}
        </QuizContext.Provider>
    );

}

export default QuizContextProvider;
