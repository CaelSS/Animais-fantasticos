export default function animatedScroll(){
const sections = document.querySelectorAll('[data-anime="scroll"]');
const windowHeight = window.innerHeight * 0.6;

function scrollSmooth() {

    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowHeight;
        if(sectionTop < 0){
            console.log('anime ae');
            section.classList.add('ativo');
        }
    })

}

window.addEventListener('scroll', scrollSmooth)
}

