const prompt = document.getElementById('prompt');
const question1Button = document.getElementById('1');
const question2Button = document.getElementById('2');
const question3Button = document.getElementById('3');
const question4Button = document.getElementById('4');
const restartButton = document.getElementById('restart');

var questions = {};
var questionWeights = {};
var currentQuestionNumber;

const handleLoadQuestions = () => {
    fetch("http://localhost:5000/questions")
        .then((response) => response.json())
        .then((data) => {
            console.log("Data", data);
            for (const question of data) {
                questions[question.order] = question;
            }
        })
        .then(() => {
            handleLoadCurrentQuestion();
        })
}

const handleLoadWeights = () => {
    const weights = localStorage.getItem('weights');
    if (weights) {
        questionWeights = JSON.parse(weights);
    } else {
        localStorage.setItem('weights', JSON.stringify({}));
        questionWeights = {};
    }
}

const handleLoadCurrentQuestion = () => {
    const questionNumber = localStorage.getItem('questionNumber');
    if (questionNumber) {
        currentQuestionNumber = parseInt(questionNumber);
        const numQuestions = Object.keys(questions).length;
        if (currentQuestionNumber-1 === numQuestions) {
            window.location.href = "/frontend/results.html"
        }
    } else {
        localStorage.setItem('questionNumber', 1);
        currentQuestionNumber = 1;
    }
    const currentQuestion = questions[currentQuestionNumber];
    const numQuestions = Object.keys(questions).length;
    prompt.innerHTML = `${currentQuestion.order}/${numQuestions}. ${currentQuestion.text}`;
    question1Button.innerHTML = currentQuestion.options[0];
    question2Button.innerHTML = currentQuestion.options[1];
    if (currentQuestion.options[2]) {
        question3Button.style.display = "block";
        question3Button.innerHTML = currentQuestion.options[2];
    } else {
        // hide
        question3Button.style.display = "none";
    }
    if (currentQuestion.options[3]) {
        question4Button.style.display = "block";
        question4Button.innerHTML = currentQuestion.options[3];
    } else {
        // hide
        question4Button.style.display = "none";
    }
}

const handleSelect = (selectedNumber) => {
    const question = questions[currentQuestionNumber];
    const optionWeights = question["optionWeights"][selectedNumber - 1];
    console.log("Question", optionWeights);
    // TODO: Add weights to user

    for (const [key, value] of Object.entries(optionWeights)) {
        if (key !== "_id") {
            if (key in questionWeights) {
                questionWeights[key] += value;
            } else {
                questionWeights[key] = value;
            }
        }
    }

    localStorage.setItem('weights', JSON.stringify(questionWeights));
    console.log("Weights", questionWeights);

    const numQuestions = Object.keys(questions).length;
    if (currentQuestionNumber === numQuestions) {
        currentQuestionNumber++;
        localStorage.setItem('questionNumber', currentQuestionNumber);
        window.location.href = "results.html";
    } else {
        currentQuestionNumber++;
        localStorage.setItem('questionNumber', currentQuestionNumber);
        handleLoadCurrentQuestion();
    }
}

question1Button.addEventListener('click', () => {
    handleSelect(1);
});

question2Button.addEventListener('click', () => {
    handleSelect(2);
});

question3Button.addEventListener('click', () => {
    handleSelect(3);
});

question4Button.addEventListener('click', () => {
    handleSelect(4);
});

restartButton.addEventListener('click', (event) => {
    event.preventDefault();

    localStorage.setItem('weights', JSON.stringify({}));
    localStorage.setItem('questionNumber', 1);
    window.location.href = "/frontend/index.html";
});




window.onload = () => {
    handleLoadQuestions();
    handleLoadWeights();
}

