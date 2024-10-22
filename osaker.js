const osakers = document.querySelectorAll('.soramimicake')

window.addEventListener('scroll', checkSoramimis)

checkSoramimis()
function checkSoramimis(){
    const triggerBottom = window.innerHeight / 5*4
    osakers.forEach(soramimicake =>{
        const boxTop = soramimicake.getBoundingClientRect().top
        if (boxTop < triggerBottom){
            soramimicake.classList.add('show')
        } else{
        soramimicake.classList.remove('show')
        }
    })
}