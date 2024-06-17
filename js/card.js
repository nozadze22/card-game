const cardsArrayName =[
    '10_of_clubs.png',       '10_of_diamonds.png',    '10_of_hearts.png',
'10_of_spades.png',      '2_of_clubs.png',        '2_of_diamonds.png',
'2_of_hearts.png',       '2_of_spades.png',       '3_of_clubs.png',
'3_of_diamonds.png',     '3_of_hearts.png',       '3_of_spades.png',
'4_of_clubs.png',        '4_of_diamonds.png',     '4_of_hearts.png',
'4_of_spades.png',       '5_of_clubs.png',        '5_of_diamonds.png',
'5_of_hearts.png',       '5_of_spades.png',       '6_of_clubs.png',
'6_of_diamonds.png',     '6_of_hearts.png',       '6_of_spades.png',
'7_of_clubs.png',        '7_of_diamonds.png',     '7_of_hearts.png',
'7_of_spades.png',       '8_of_clubs.png',        '8_of_diamonds.png',
'8_of_hearts.png',       '8_of_spades.png',       '9_of_clubs.png',
'9_of_diamonds.png',     '9_of_hearts.png',       '9_of_spades.png',
'ace_of_clubs.png',      'ace_of_diamonds.png',   'ace_of_hearts.png',
'ace_of_spades2.png',    'black_joker.png',       'jack_of_clubs2.png',
'jack_of_diamonds2.png', 'jack_of_hearts2.png',   'jack_of_spades2.png',
'king_of_clubs2.png',    'king_of_diamonds2.png', 'king_of_hearts2.png',
'king_of_spades2.png',   'queen_of_clubs2.png',   'queen_of_diamonds2.png',
'queen_of_hearts2.png',  'queen_of_spades2.png',  'red_joker.png'
];

function getShuffledCards(array = [], count = cardsArrayName.length) {
    for(let i = array.length - 1; i > 0; i--){
        const j =  Math.floor(Math.random() * (i + 1));
        // const temp = array[j];
        // array[j] = array[i];
        // array[i] = temp;
        [array[i], array[j]] = [array[j], array[i]];
    } 
    return array.slice(0, count);
}


function getShuffledWithDuplicates(array = [], count = 0) {
    const shuffledCards = getShuffledCards(array, count);
    const dublicateCards = [];
    for(const itme of shuffledCards) {
        dublicateCards.push(itme, itme);
    }
        for(let i = dublicateCards.length - 1; i > 0; i--){
            const j =  Math.floor(Math.random() * (i + 1));
            [dublicateCards[i], dublicateCards[j]] = [dublicateCards[j], dublicateCards[i]];
        } 
    return dublicateCards;
}

console.table(getShuffledWithDuplicates(cardsArrayName, 10));


