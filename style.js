setInterval(setClock, 1000)
setClock()
function setClock(){
    const hourHand = document.querySelector(".hour")
    const minuteHand = document.querySelector(".minute")
    const secondHand = document.querySelector(".second")
    const currentDate = new Date()
    const secondRatio = currentDate.getSeconds() /60 ;
    const minutesRatio = (secondRatio + currentDate.getMinutes()) /60;
    const hourRatio = (minutesRatio+currentDate.getHours()) /12;
   console.log();
    setRotation(secondHand,secondRatio)
    setRotation(minuteHand,minutesRatio)
    setRotation(hourHand,hourRatio)
    
}

function setRotation(element, rotationRatio){
element.style.setProperty('--rotation',rotationRatio * 360)
}


