

const hex = document.querySelector('.hex-display')
const hexc = document.querySelector('.color-gen')
const hexvalues = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']


const getRandomNumber = (num)=>{
    return Math.floor(Math.random()*num)
}


hexc.addEventListener('click',()=>{
    let hexv='#'
    for(let i=0;i<6;i++){
        hexv+=hexvalues[getRandomNumber(hexvalues.length)]
    }
    hex.textContent = `Background Color : ${hexv}`
    document.body.style.backgroundColor = hexv
})

