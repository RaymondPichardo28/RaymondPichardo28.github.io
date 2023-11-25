// Questions that will be asked
const Questions = [{
	q: "What is the average starting annual salary of Year Up graduates?",
	a: [{ text: "$100,000", isCorrect: false },
	{ text: "$72,000", isCorrect: false },
	{ text: "$52,000", isCorrect: true },
	{ text: "$36,000", isCorrect: false }
	],
	image: "avgSalary.png", // Add the image property

},
{
	q: "How many students has Year Up served to date? (closest answer)",
	a: [{ text: "23,000+", isCorrect: false, isSelected: false },
	{ text: "32,000+", isCorrect: false },
	{ text: "43,000+", isCorrect: true },
	{ text: "50,000+", isCorrect: false }
	],
	image: "studentsServed.png", // Add the image property

},
{
	q: "Percentage of graduates employed or enrolled in postsecondary education within 4 months of graduation?",
	a: [{ text: "60%", isCorrect: false },
	{ text: "80%", isCorrect: true },
	{ text: "85%", isCorrect: false },
	{ text: "90%", isCorrect: false }
	],
	image: "graduates.png", // Add the image property

},
{
	q: "Number of campuses across the US? (closest answer)",
	a: [{ text: "15+", isCorrect: false},
	{ text: "25+", isCorrect: false },
	{ text: "30+", isCorrect: true },
	{ text: "40+", isCorrect: false }
	],
	image: "campuses.png", // Add the image property

},
{
	q: "Percentage of alumni satisfied with Year Up?",
	a: [{ text: "70%", isCorrect: false},
	{ text: "84%", isCorrect: false },
	{ text: "92%", isCorrect: true },
	{ text: "99%", isCorrect: false }
	],
	image: "alumni.png", // Add the image property

}
]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""
	
	// Add image for the current question
	const image = document.createElement("img");
	image.src = Questions[currQuestion].image;
	image.alt = "Question Image";
	image.style.width = "auto";
    image.style.height = "20vh";
	question.appendChild(image);

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score");
	totalScore.innerHTML = `You scored ${score} out of ${Questions.length}<br>Answers at <a href="https://www.yearup.org/">Year Up</a>`;
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
