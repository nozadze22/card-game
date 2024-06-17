const controls = document.querySelector(".controls");
const startBtn =  document.querySelector("#startBtn");
const displayRange =document.querySelector("#displayRange");
const ScoreDisplay = document.querySelector("#ScoreDisplay");
const generate = document.querySelector(".generate");
const rangePicker = document.querySelector("#rangePicker");
const displayWrapper = document.querySelector(".wrapper");


const gameConfig = {
    isStarted: true,
    score: 0,
    amount: 10,
    selectedCards: []
};

displayRange.innerHTML = rangePicker.value;

rangePicker.addEventListener("click", () => {
    displayRange.innerHTML = rangePicker.value;
    gameConfig.amount = Number(rangePicker.value);

});

startBtn.addEventListener("click", () => {
    gameConfig.isStarted = true;
    startGame();
    
});

function toggleControls () {
    controls.style.display = gameConfig.isStarted ? "none" : "block";
    displayWrapper.style.display = gameConfig.isStarted ? "block" : "none";
    generate.style.display = gameConfig.isStarted ? "grid" : "none";
}

startGame();
function startGame () {
    console.log(gameConfig);
    toggleControls();
    initCards();
}

function  initCards() {
    const randomCardArray = getShuffledWithDuplicates(cardsArrayName, gameConfig.amount);
    randomCardArray.forEach(card => {
        generate.innerHTML += `
        
        <div class="box">

        <img class="card-image" src="./assets/image/${card}">
        </div>
        `;
        

    });

}