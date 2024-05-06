"use strict";

// Dark Mode Switching
document.addEventListener("DOMContentLoaded", function() {
    const darkModeSwitch = document.getElementById("dark-mode-switch");
    const headerImage = document.getElementById('headerImage');
    const logo = document.getElementById("logo");
    const slider = document.querySelector(".slider");
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    darkModeSwitch.addEventListener("change", function() {
        const isDarkMode = this.checked;
        setDarkMode(isDarkMode);
        localStorage.setItem("darkMode", isDarkMode);
    });

    function setDarkMode(isDarkMode) {
        const body = document.body;
        if (isDarkMode) {
            body.classList.add("dark-mode");
            headerImage.src = "images/webparalax_dark.png";
            logo.src = "images/logo1.png";
            slider.style.backgroundColor = "#ffffff";
        } else {
            body.classList.remove("dark-mode");
            headerImage.src = "images/webparalax_light.png";
            logo.src = "images/logo.png";
            slider.style.backgroundColor = "#303030";
        }
    }
});

// Image Slider
$(document).ready(function(){
    $(`.next`).on(`click`, function() {
        let currentImg = $(`.active`);
        let nextImg = currentImg.next();
        if (nextImg.length) {
            currentImg.removeClass(`active`).css(`z-index`, -10);
            nextImg.addClass(`active`).css(`z-index`, 10);
        }
    });

    $(`.prev`).on(`click`, function() {
        let currentImg = $(`.active`);
        let prevImg = currentImg.prev();
        if (prevImg.length) {
            currentImg.removeClass(`active`).css(`z-index`, -10);
            prevImg.addClass(`active`).css(`z-index`, 10);
        }
    });
});

// SVG Color Manipulation
const changeColorBtn = document.getElementById('changeColorBtn');
const svgElement = document.getElementById('mySVG');
const svgPaths = svgElement.querySelectorAll('path');
let boxPicker = new iro.ColorPicker("#boxPicker", {
    width: 250,
    color: "rgb(255, 0, 0)",
    borderWidth: 1,
    borderColor: "#fff",
    layout: [
        {
            component: iro.ui.Box,
        },
        {
            component: iro.ui.Slider,
            options: {
                id: 'hue-slider',
                sliderType: 'hue'
            }
        }
    ]
});

function resetSvgColor() {
    svgPaths.forEach(path => {
        path.setAttribute('fill', '#000000');
    });
}

function updateSvgColor(color) {
    svgPaths.forEach(path => {
        path.setAttribute('fill', color.rgbString);
    });
}

changeColorBtn.addEventListener('click', function() {
    const randomColor = getRandomColor();
    updateSvgColor(randomColor);
    boxPicker.color.set(randomColor);
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

boxPicker.on('color:change', function(color) {
    updateSvgColor(color);
});
//

  

// window.onload = function() {
//     if (window.jQuery) {
//         alert("jQuery is loaded!");
//     } else {
//         alert("jQuery is not loaded!");
//     }
// };