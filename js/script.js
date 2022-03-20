'use strict';

var quote = document.querySelector('.blockquote__text')
var author = document.querySelector('.blockquote__text-credit')
// var nav = document.querySelector('.nav')

var loadQuotes = async function() {
    var quote = await fetch(`https://api.quotable.io/random?maxLength=10/success`)
    var data = await quote.json()
    return data
 }

var changeHTML = function(res) {
    quote.innerHTML = `${res.content}`
    author.innherHTML = `${res.author}`
}

loadQuotes().then(res => changeHTML(res)).catch(err => console.error(err));

// console.log(nav.childNodes)