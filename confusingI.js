"use strict";
(function() {
    const confusingIArray = document.querySelectorAll(".confusingI");
    const changeI = () => {
        console.log("is active")
        for(let i = 0; i< confusingIArray.length; i++) confusingIArray[i].innerText = "I";
    }
    const changei = ()=> {
        for(let i = 0; i < confusingIArray.length; i++) confusingIArray[i].innerText = "i";
    }
    for(let i = 0; i < confusingIArray.length; i++) {
        confusingIArray[i].addEventListener('mouseover',changeI);
        confusingIArray[i].addEventListener('mouseout',changei);
    }



})()