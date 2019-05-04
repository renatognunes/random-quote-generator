/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing



/*** 
This is an array of objects. Each object has two mandatory properties: Quote and Source.
Extra proprities (citation, year and category) were added when available.
***/

let quotes = [
  {
    quote:'The most valuable businesses of coming decades will be built by entrepreneurs who seek to empower people rather than try to make them obsolete.',
    source:'Peter Thiel',
    citation:'Zero to One',
    year: 2014,
    category: 'Business'
  },
  {
    quote:'Nothing in life should be feared, but instead understood. We should seek to understand more and more so that we can fear less and less.',
    source:'Marie Curie',
    citation:'Our Precarious Habitat',
    year: 1973,
    category: 'Motivational'
  },
  {
    quote:'The value of things is not the time they last, but the intensity with which they occur. That is why there are unforgettable moments and unique people!',
    source:'Fernando Pessoa',
    category: 'Inspirational'
  },
  {
    quote:'An artist is someone who uses bravery, insight, creativity, and boldness to challenge the status quo. And an artist takes it personally.',
    source:'Seth Godin',
    citation:'Are Your Indispensable?',
    year:2010,
    category: 'Creativity'
  },
  {
    quote:'The greatest thing is when you do put your heart and soul into something over an extended period of time, and it is worth it.',
    source:'Steve Jobs',
    category:'Motivational'
  },
  {
    quote:'Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.',
    source:'Albert Einstein',
    citation:'The Saturday Evening Post',
    year:1929,
    category:'Creativity'
  }
];


/***
  This getRandomQuote function accepts an array as argument and generate 
  a random number from 0 to the last index in that array. 
  The function returns the array passed as argument with the random number inside the box 
  notation, indicating which item in the array the function randomly selected.
***/

function getRandomQuote(arr) {
  let getRandomNumber = Math.floor(Math.random() * quotes.length);
  return arr[getRandomNumber];
};


/***
This function generates a random RGB color. 
Every time this function is called a new random color is generated and assigned to the body background.
***/

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
  document.body.style.background = rgb;
};


/***
This printQuote function generates a string of HTML with the properties 
of the item selected by the getRandomQuote function. 
This function assigns the quote, source and other properties of the selected item to a string of HTML 
and place each property inside its respective classes.
When printQuote is called, it changes the current quote being displayed to a new one and it also 
invokes the getRandomColor function making the background changes every time the quote changes.
***/

function printQuote() {
  let quote = getRandomQuote(quotes);
  let message = '';
  message += '<p class="quote">' + quote.quote + '</p>';
  message += '<p class="source">' + quote.source;
  if(quote.citation) {
    message += '<span class="citation">' + quote.citation + '</span>';
  } 
  if(quote.year) {
    message += '<span class="year">' + quote.year + '</span>';
  }
  if(quote.category) {
    message += '<span class="category">' + quote.category + '</span>';
  }
  message += '</p>';
  document.getElementById("quote-box").innerHTML = message;
  getRandomColor();
};


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


/***
This method auto refresh the quote. After 6 seconds the method will call 
printQuote function again and display a new quote automatically.
***/
window.setInterval(printQuote, 6000);