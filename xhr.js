// JavaScript Document

/* Using XMLHTTPRequest API */

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
    
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'text';
    
    request.onload = function () {
        poemDisplay.textContent = request.response;
    };
    
    request.send();
}

updateDisplay('Verse 1');
verseChoose.value = 'Value 1';



/* This code inspired by - 
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
*/

/* Poem Courtesy of http://blog.anguscroll.com/if-edgar-allen-poe-wrote-javascript */ 
