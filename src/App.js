import React, { useState } from 'react';


export default function App() {
	const questions = [
		{
			questionText: 'Which is React?',
			answerOptions: [
				{ answerText: 'A Javascript library', isCorrect: true },
				{ answerText: 'A programming language', isCorrect: false },
				{ answerText: 'An Operating system', isCorrect: false },
				{ answerText: 'A javascript framwork', isCorrect: false },
			],
		},
		{
			questionText: 'what is the correct command to create a new react project?',
			answerOptions: [
				{ answerText: 'npx create-react-app', isCorrect: false },
				{ answerText: 'npm create-react-app myReactApp', isCorrect: false },
				{ answerText: 'npx create-react-app myReactApp', isCorrect: true },
				{ answerText: 'npm create-react-app', isCorrect: false },
			],
		},
		{
			questionText: 'what is the default local host port that a React development server uses?',
			answerOptions: [
				{ answerText: '5000', isCorrect: false },
				{ answerText: '3500', isCorrect: false },
				{ answerText: '3000', isCorrect: true },
				{ answerText: '8080', isCorrect: false },
			],
			
		},
		{
			questionText: 'A copy of the real DOM that is kept in memory is called what?',
			answerOptions: [
				{ answerText: 'Shadow DOM', isCorrect: false },
				{ answerText: 'DOM', isCorrect: false },
				{ answerText: 'Virtual DOM', isCorrect: true },
				{ answerText: 'React DOM', isCorrect: false },
			],
		},
		{
			questionText: 'what tool does React use to compile JSX?',
			answerOptions: [
				{ answerText: 'React DOM', isCorrect: false },
				{ answerText: 'JSX Compiler', isCorrect: false },
				{ answerText: 'React Router', isCorrect: false },
				{ answerText: 'Babel', isCorrect: true },
			],
		},
		{
			questionText: 'what is a common use case for ref?',
			answerOptions: [
				{ answerText: 'To refer to a function', isCorrect: false },
				{ answerText: 'To refer to another JavaScript file', isCorrect: false },
				{ answerText: 'TO directly access a DOM node', isCorrect: true },
				{ answerText: 'To bind the function', isCorrect: false },
			],
		},
		{
			questionText: 'what is the childern prop?',
			answerOptions: [
				{ answerText: 'A property that adds child values to state', isCorrect: false },
				{ answerText: 'A property that lets you pass data to child components', isCorrect: false },
				{ answerText: 'A property that lets you nest components in other components', isCorrect: true },
				{ answerText: 'A property that lets you set an object as a property', isCorrect: false },
			],
		},
		{
			questionText: 'which keyword creates a constant in JavaScript?',
			answerOptions: [
				{ answerText: 'const', isCorrect: true },
				{ answerText: 'let', isCorrect: false },
				{ answerText: 'constant', isCorrect: false },
				{ answerText: 'var', isCorrect: false },
			],
		},
		{
			questionText: 'Which operator can be used to conditionally render a React component?',
			answerOptions: [
				{ answerText: '&&', isCorrect: true },
				{ answerText: '??', isCorrect: false },
				{ answerText: '::', isCorrect: false },
				{ answerText: '||', isCorrect: false },
			],
		},
		{
			questionText: 'React separates the user interface into components.How are components combined to create a user interface?',
			answerOptions: [
				{ answerText: 'with webpack', isCorrect: false },
				{ answerText: 'By nesting components', isCorrect: true },
				{ answerText: 'By putting them in a folder structure', isCorrect: false },
				{ answerText: 'with code splitting', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}