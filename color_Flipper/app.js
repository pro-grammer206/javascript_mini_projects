const colours = ['Red','Green','Blue','rgb(200,100,150)','hsl(100,200,300)']
const display = document.querySelector('.col-display');
const changer = document.querySelector('.color-changer');

const getRandomNumber = (num)=>{
    return Math.floor(Math.random()*num)
}

changer.addEventListener('click',function(){
    const num = getRandomNumber(colours.length)
    display.textContent = `Background Color:${colours[num]}`
    //display.style.backgroundColor=colours[num]
    document.body.style.backgroundColor=colours[num]
    
})


