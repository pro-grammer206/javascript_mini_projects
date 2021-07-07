const count = document.querySelector('.count')

const btn_grp = document.querySelectorAll('.btn')

let countnum = 0

btn_grp.forEach((btn)=>{
   btn.addEventListener('click',(e)=>{
       const optype = e.currentTarget.classList
        if(optype.contains('decrease')){
            count.textContent = countnum--;
        }else if(optype.contains('increase')){
            count.textContent = countnum++;
        }else{
            count.textContent = 0
            countnum = 0
        }
      
        
        count.style.color= countnum>0?"green":"red"

    })
})