'use strict';

var quote = document.querySelector('#quote')
// var nav = document.querySelector('.nav')

var loadQuotes = async function() {
    var quote = await fetch(`https://api.quotable.io/random?maxLength=50/success`)
    var data = await quote.json()
    return data.content
 }

loadQuotes().then(res => quote.innerHTML = `🧾${res}🧾`).catch(err => console.error(err));

// console.log(nav.childNodes)