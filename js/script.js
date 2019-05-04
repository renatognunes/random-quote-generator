/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

let quotes = [
  {
    quote:'The most valuable businesses of coming decades will be built by entrepreneurs who seek to empower people rather than try to make them obsolete.',
    source:'Peter Thiel',
    citation:'Zero to One',
    year: 2014
  },
  {
    quote:'Nothing in life should be feared, but instead understood. We should seek to understand more and more so that we can fear less and less.',
    source:'Marie Curie',
    citation:'Our Precarious Habitat',
    year: 1973
  },
  {
    quote:'The value of things is not the time they last, but the intensity with which they occur. That is why there are unforgettable moments and unique people!',
    source:'Fernando Pessoa',
    citation:'',
    year:'',
  },
  {
    quote:'An artist is someone who uses bravery, insight, creativity, and boldness to challenge the status quo. And an artist takes it personally.',
    source:'Seth Godin',
    citation:'Are Your Indispensable?',
    year:2010
  },
  {
    quote:'The greatest thing is when you do put your heart and soul into something over an extended period of time, and it is worth it.',
    source:'Steve Jobs',
    citation:'',
    year:'',
  }
];



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote(arr) {

};

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote() {

};


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.