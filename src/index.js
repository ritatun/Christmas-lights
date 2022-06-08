import './styles.css';
import './styles.scss';

const btnOff = document.querySelector('.btn-off');
const btnOn = document.querySelector('.btn-on');
const bulbs = document.querySelectorAll('.bulb');

const speed1 = document.querySelector('#first-speed');
const speed2 = document.querySelector('#second-speed');
const speed3 = document.querySelector('#third-speed');

const continuous = document.querySelector('.continuous');
const flicker = document.querySelector('.flicker');
const running = document.querySelector('.running');

/* continuous.addEventListener('click', () => console.log("continuous"));
flicker.addEventListener('click', () => console.log("flicker"));
running.addEventListener('click', () => console.log("running"));

speed1.addEventListener('click', () => turnOn(+speed1.value));
speed2.addEventListener('click', () => turnOn(+speed2.value));
speed3.addEventListener('click', () => turnOn(+speed3.value)); */

btnOff.addEventListener('click', turnOff);

function turnOff(){
    for (let item of bulbs) {
        item.style.animation = "none";
        item.style.boxShadow = "none";

    }
}

btnOn.addEventListener('click', () => turnOn());

function turnOn(){
    const colors = [
        'red-shine', 
        'yellow-shine', 
        'green-shine', 
        'aquamarine-shine', 
        'orange-shine', 
        'blue-shine', 
        'violet-shine'
    ];

    const colorsHEX = [
        '#C30F16', 
        '#f1c40f', 
        '#2ecc71', 
        '#64fcfe', 
        '#f18f0f', 
        '#050a94', 
        '#be27b9'
    ];

    let lightSpeed = getSpeed();
    let lightMode = getMode(); 

    switch(lightMode) {
        case 'flicker': flickerAnimation(bulbs, lightSpeed, colors)
        break;

        case 'continuous': continuousAnimation(bulbs, colorsHEX)
        break;

        case "runningLights": runningLights(bulbs, lightSpeed, colors)
        break;

        default: return
    }
}

function flickerAnimation(bulbs, lightSpeed, colors){
    for (let i = 0; i < bulbs.length; i++) {
        bulbs[i].style.animation = `${lightSpeed}s infinite alternate ${colors[i]}`
    }
}

function continuousAnimation(bulbs, colors){
    for (let i = 0; i < bulbs.length; i++) {
        bulbs[i].style.animation = "none";
        bulbs[i].style.boxShadow = `0 0 20px 10px ${colors[i]}`
    }
}

function runningLights(bulbs, lightSpeed, colors){
    for (let i = 0; i < bulbs.length; i++) {
        bulbs[i].style.animation = `${lightSpeed / 2}s ${((i === 0) || (i % 2 === 0)) ? 0.5 : 0}s infinite alternate ${colors[i]}`;
        //bulbs[i].style.boxShadow = `0 0 20px 10px ${colors[i]}`
    }
}

function getSpeed() {
    const speeds = document.querySelectorAll('.speed');
    let speedArray = Array.from(speeds)
    let speed;
    for (let i = 0; i < speedArray.length; i++){
        if (speedArray[i].checked) {
            speed = speedArray[i].value
        }
    }
    //console.log(speed)
    return speed    
}

function getMode() {
    const modes = document.querySelectorAll('.btn-mode');
    let modesArray = Array.from(modes)
    let mode;
    for (let i = 0; i < modesArray.length; i++){
        if (modesArray[i].checked) {
            mode = modesArray[i].value
        }
    }
    //console.log(mode)
    return mode    
}