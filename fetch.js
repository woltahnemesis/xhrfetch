//JavaScript Document

//Modern way

let verseChoose = document.querySelector('select');

let poemDisplay = document.querySelector('p');

verseChoose.onchange = function(){
    let verse = verseChoose.value;
    updateDisplay(verse);
}

function updateDisplay(verse){
    verse = verse.replace(' ', '');
    verse = verse.toLowerCase();
    let url = verse + '.txt';
    
    fetch(url).then(function(response){
        response.text().then(function(text){
            poemDisplay.textContent = text;
        });
        
    });
}

updateDisplay('Verse 1');
verseChoose.value = 'Value 1';