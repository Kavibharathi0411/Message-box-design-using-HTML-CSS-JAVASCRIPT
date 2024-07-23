const acceptedQuestions = [
    "What is your name",
    "How old are you",
    "Where do you live",
    "how are you",
    "what do you had for lunch"
];
function isQuestionAccepted(question) {
    return acceptedQuestions.includes(question);
}
function checkQuestion() {
    const questionInput = document.getElementById("questionInput").value.trim();
    const responseElement = document.getElementById("response");

    if (questionInput === "") {
        responseElement.textContent = "Please enter a question.";
        responseElement.style.color = "red";
        return;
    }

    if (isQuestionAccepted(questionInput)) {
        responseElement.textContent = "Accepted: You asked a valid question.";
        responseElement.style.color = "green";
    } else {
        responseElement.textContent = "Declined: Sorry, I cannot answer that question.";
        responseElement.style.color = "red";
    }
}

