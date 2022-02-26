import { useState } from "react";

interface IProps {
    quizzes: string[],
    quizID: number,
    setQuizID: (n: number) => number,
    totalScore: number,
    updateScore: (b: boolean) => void,
}

const Main: React.FC<IProps> = ({ quizzes, quizID, setQuizID, totalScore, updateScore }) => {

    const [counter, setCounter] = useState<number>(1);

    let quiz: any = quizzes[quizID];

    console.log(totalScore);


    const handleClick = (e: any) => {
        if (quiz.correct_answer === e.target.innerText) {
            updateScore(true);
            alert("Correct!.");
        } else {
            alert("Wrong!");
        }

        setCounter(counter + 1);

        if (counter < 10) {
            setQuizID(quizID + 1);
        }
    }

    // const nextQuestion = () => {
    //     setQuizID(quizID + 1);
    // }

    // const prevQuestion = () => {
    //     setQuizID(quizID - 1);
    // }

    const answers = [quiz.correct_answer, ...quiz.incorrect_answers];
    return (
        <div className='w-8/12 mx-auto'>
            <div className='shadow bg-white my-12 p-8 rounded'>
                {counter < 11 ? (<><div className='text-center font-bold '>
                    <h3 className='text-xl uppercase'>{quiz.question}</h3>
                    <span className='text-xs'>Category: {quiz.category}</span>
                </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        {answers.map((i) => {
                            return (<button onClick={handleClick} className="py-3 text-sm bg-gray-800 text-gray-100 rounded-lg hover:bg-gray-600">
                                {i}
                            </button>)
                        })}
                    </div>
                    {/* <div className='flex justify-between mt-6'>
                    {quizID > 0 ? <button onClick={() => prevQuestion()}>Prev Question</button> : '-'}
                    {quizID < 9 ? <button onClick={() => nextQuestion()}>Next Question</button> : '-'}
                </div> */}</>) : (<div>Your point {totalScore}.</div>)}
            </div>
        </div>
    )
}

export default Main