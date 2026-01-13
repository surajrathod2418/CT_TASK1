const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink and Text Markup Language",
            "Home Tool Markup Language"
        ],
        answer: 0
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        answer: 1
    },
    {
        question: "Which language is used to make web pages interactive?",
        options: ["Python", "C++", "Java", "JavaScript"],
        answer: 3
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: 1
    },
    {
        question: "Which CSS property is used to change background color?",
        options: ["color", "bgcolor", "background-color", "background-style"],
        answer: 2
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: ["<!-- -->", "//", "/* */", "**"],
        answer: 1
    },
    {
        question: "Which method is used to display output in JavaScript?",
        options: ["print()", "display()", "console.log()", "show()"],
        answer: 2
    },
    {
        question: "Which HTML tag is used to include JavaScript code?",
        options: ["<js>", "<javascript>", "<script>", "<code>"],
        answer: 2
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["int", "define", "var", "let"],
        answer: 3
    },
    {
        question: "Which CSS property controls the text size?",
        options: ["font-style", "text-size", "font-weight", "font-size"],
        answer: 3
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

loadQuestion();

function loadQuestion() {
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";

    const q = questions[currentQuestion];
    questionEl.innerText = q.question;

    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.classList.add("option-btn");
        btn.onclick = () => selectAnswer(btn, index);
        optionsEl.appendChild(btn);
    });
}

function selectAnswer(button, index) {
    const correctAnswer = questions[currentQuestion].answer;
    const buttons = document.querySelectorAll(".option-btn");

    buttons.forEach(btn => btn.disabled = true);

    if (index === correctAnswer) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
        buttons[correctAnswer].classList.add("correct");
    }

    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    questionEl.innerText = "Quiz Completed 🎉";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    scoreEl.innerText = `Your Score: ${score} / ${questions.length}`;
}
