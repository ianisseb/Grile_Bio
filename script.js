document.addEventListener("DOMContentLoaded", function() {
    const counterElement = document.createElement("div");
    const mistakesElement = document.createElement("div");
    counterElement.id = "counter";
    mistakesElement.id = "mistakes";
    document.body.appendChild(counterElement);
    document.body.appendChild(mistakesElement);

    let currentQuestionIndex = 0;
    let mistakes = 0;
    let mistakesList = [];

    function updateCounter(quizData) {
        counterElement.textContent = `Întrebări: ${currentQuestionIndex + 1}/${quizData.length}`;
    }

    function updateMistakes() {
        mistakesElement.textContent = `Greșeli: ${mistakes}`;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function loadQuiz(quizData) {
        const currentQuestion = quizData[currentQuestionIndex];
        const questionElement = document.getElementById("question");
        const choicesElement = document.getElementById("choices");

        if (currentQuestion.question) {
            questionElement.textContent = currentQuestion.question;
        } else if (currentQuestion.image) {
            questionElement.innerHTML = `<img src="${currentQuestion.image}" alt="Question Image">`;
        }

        // Shuffle choices for the current question
        const shuffledChoices = [...currentQuestion.choices];
        shuffleArray(shuffledChoices);

        choicesElement.innerHTML = '';
        shuffledChoices.forEach(choice => {
            const choiceElement = document.createElement("label");
            choiceElement.classList.add("choice");
            choiceElement.innerHTML = `
                <input type="checkbox" name="choice" value="${choice}">
                ${choice}
            `;
            choicesElement.appendChild(choiceElement);
        });
        updateCounter(quizData);
        updateMistakes();
    }

    function handleQuizSubmission(quizData) {
        const submitButton = document.getElementById("submit-btn");
        const resultElement = document.getElementById("result");
        submitButton.addEventListener("click", function() {
            const selectedChoices = document.querySelectorAll('input[name="choice"]:checked');
            if (selectedChoices.length > 0) {
                const selectedValues = Array.from(selectedChoices).map(choice => choice.value);
                const currentQuestion = quizData[currentQuestionIndex];
                const isCorrect = selectedValues.every(value => currentQuestion.correctAnswers.includes(value)) &&
                                  currentQuestion.correctAnswers.every(answer => selectedValues.includes(answer));
                if (isCorrect) {
                    resultElement.textContent = "Corect!";
                    resultElement.style.color = "green";
                } else {
                    resultElement.textContent = `Greșit! Răspunsul corect este ${currentQuestion.correctAnswers.join(", ")}.`;
                    resultElement.style.color = "red";
                    mistakes++;
                    mistakesList.push({
                        question: currentQuestion.question || 'Imagine',
                        image: currentQuestion.image || null,
                        selected: selectedValues,
                        correct: currentQuestion.correctAnswers
                    });
                    updateMistakes();
                }
                currentQuestionIndex++;
                if (currentQuestionIndex < quizData.length) {
                    loadQuiz(quizData);
                } else {
                    resultElement.textContent = "Ai terminat testul!";
                    counterElement.textContent = `Întrebări: ${quizData.length}/${quizData.length}`;
                    displayMistakes();
                }
            } else {
                resultElement.textContent = "Vă rugăm să selectați un răspuns.";
                resultElement.style.color = "orange";
            }
        });
    }

    function displayMistakes() {
        if (mistakesList.length > 0) {
            const mistakesContainer = document.createElement("div");
            mistakesContainer.id = "mistakes-container";
            mistakesContainer.innerHTML = "<h3>Întrebări greșite:</h3>";
            mistakesList.forEach((mistake, index) => {
                const mistakeElement = document.createElement("div");
                mistakeElement.classList.add("mistake");
                mistakeElement.innerHTML = `
                    <p><strong>Întrebarea ${index + 1}:</strong> ${mistake.question}</p>
                    ${mistake.image ? `<img src="${mistake.image}" alt="Question Image">` : ""}
                    <p><strong>Răspunsul selectat:</strong> ${mistake.selected.join(", ")}</p>
                    <p><strong>Răspunsul corect:</strong> ${mistake.correct.join(", ")}</p>
                `;
                mistakesContainer.appendChild(mistakeElement);
            });
            document.body.appendChild(mistakesContainer);
        }
    }

    window.initQuiz = function(quizData) {
        loadQuiz(quizData);
        handleQuizSubmission(quizData);
    }
});
