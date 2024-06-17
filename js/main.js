const controls = document.querySelector(".controls");
const startBtn =  document.querySelector("#startBtn");
const displayRange =document.querySelector("#displayRange");
const ScoreDisplay = document.querySelector("#ScoreDisplay");
const generate = document.querySelector(".generate");
const rangePicker = document.querySelector("#rangePicker");
const displayWrapper = document.querySelector(".wrapper");





const gameConfig = {
    isStarted: false,
    score: 0,
    amount: rangePicker.value,
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


function startGame () {
    toggleControls();
    initCards();
    rotateAllCards();
}

function  initCards() {
    const randomCardArray = getShuffledWithDuplicates(cardsArrayName, gameConfig.amount);
    generate.style.gridTemplateColumns  =  `repeat(${Math.floor(gameConfig.amount / 2) }, 1fr)`; 
    randomCardArray.forEach(card => {
        generate.innerHTML += `
        
        <div class="box">
        <img class="card-image back-rotate" src='./assets/image/${card}'  />
        </div>
        `;
    });
    document.querySelectorAll(".box").forEach(element => {
        togleBoxClasses(element);
        element.addEventListener("click", function() {
            if(!this.classList.contains("rotate") && gameConfig.selectedCards.length < 2) {
                togleBoxClasses(this);
                gameConfig.selectedCards.push(this);
                checkSelectedElemets();
            }

        });
     

    });
  

}

function rotateAllCards () {
    setTimeout (() => {
        document.querySelectorAll(".box").forEach(element => {
            togleBoxClasses(element);
        });

    }, 2000);
}

function togleBoxClasses(element) {
    element.classList.toggle("rotate");
    element.classList.toggle("back-rotate")
}

function checkSelectedElemets() {
    if(gameConfig.selectedCards.length === 2) {
        const firstCard = getImageNameWithBox(gameConfig.selectedCards[0]);
        const secondCard = getImageNameWithBox(gameConfig.selectedCards[1]);
        console.log(firstCard, secondCard);
        if(firstCard === secondCard) {
            gameConfig.selectedCards.splice(0);
            gameConfig.score++;
            ScoreDisplay.innerHTML =  gameConfig.score;
            if(gameConfig.score === gameConfig.amount){
                Swal.fire({
                    title: "Well done",
                    icon: "success",
                    text: "you won"
                });

            }
                
        }else {
            setTimeout(() => {
                gameConfig.selectedCards.forEach(element => {
                    togleBoxClasses(element);
                });
                gameConfig.selectedCards.splice(0);
            }, 1000)
        }
    }
}


function getImageNameWithBox(element) {
    return element.childNodes[1].src.split("/").pop();
}
