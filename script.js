let cards = [];
let currentIndex = 0;
let showQuestionAsFirstPart = true; // Toggle for which part to show as the question

function saveData() {
    const data = document.getElementById("cardData").value.trim();
    const pairs = data.split('\n');
    cards = pairs.map(pair => {
        const [firstPart, secondPart] = pair.split(',');
        return { firstPart: firstPart.trim(), secondPart: secondPart.trim() };
    });

    shuffleCards(cards);
    currentIndex = 0;
    updateCard();
    document.getElementById("setupScreen").style.display = 'none';
    document.getElementById("playScreen").style.display = 'block';
}

function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showAnswer() {
    const card = cards[currentIndex];
    const answer = document.getElementById("answer");
    answer.textContent = showQuestionAsFirstPart ? card.secondPart : card.firstPart;
    answer.style.display = 'block';
}

function nextCard() {
    showQuestionAsFirstPart = Math.random() > 0.5; // Randomize the question/answer display for the next card
    currentIndex = (currentIndex + 1) % cards.length;
    updateCard();
}

function updateCard() {
    const card = cards[currentIndex];
    const questionText = showQuestionAsFirstPart ? card.firstPart : card.secondPart;
    document.getElementById("question").textContent = questionText;
    document.getElementById("answer").textContent = '';
    document.getElementById("answer").style.display = 'none';
}

function goToSetup() {
    document.getElementById("setupScreen").style.display = 'block';
    document.getElementById("playScreen").style.display = 'none';
}
