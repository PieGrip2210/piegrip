const cakes = document.querySelectorAll('.achievement, .projects')

window.addEventListener('scroll', checkSoramimi)

checkSoramimi()
function checkSoramimi(){
    const triggerBottom = window.innerHeight / 5*4
    cakes.forEach(soramimi =>{
        const boxTop = soramimi.getBoundingClientRect().top
        if (boxTop < triggerBottom){
            soramimi.classList.add('show')
        } else{
        soramimi.classList.remove('show')
        }
    })
}