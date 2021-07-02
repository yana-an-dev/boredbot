"use strict";


document.getElementById("request-btn").addEventListener('click', () => {
    fetch('https://apis.scrimba.com/bored/api/activity')
        //originally from : "https://www.boredapi.com/api/activity"
        .then(response => response.json())// out of JSON to JS
        .then(data => document.getElementById("word").textContent = data.activity)
})
