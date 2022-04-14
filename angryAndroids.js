"use strict";
(function() {
    const androidBody = document.querySelectorAll(".android div");
    const androidEyes = document.querySelectorAll(".eyes");
    const frame = document.querySelector(".frame");
    const tToggle = document.querySelector(".dtToggle");
    const root = document.querySelector(":root");
    const glare = () => {
        androidEyes[0].style.backgroundColor = "red";
        androidEyes[1].style.backgroundColor = "red";
        frame.style.borderColor = "red";
    }
    const unglare = () => {
        androidEyes[0].style.backgroundColor = "var(--background)";
        androidEyes[1].style.backgroundColor = "var(--background)";
        frame.style.borderColor = "var(--green)";
    }
    const tSwitch = () => {
        root.classlist.toggle("inverse");
    }

    tToggle.addEventListener('click',tSwitch);
    for (let i = 0; i < androidBody.length; i++) {
        androidBody[i].addEventListener('mouseout', unglare)
        androidBody[i].addEventListener('mouseover',glare)
    }
})();
