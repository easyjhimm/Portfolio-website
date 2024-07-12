let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active')
            })
        }




    })
}



menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const textElement = document.getElementById('animated-text');
const words = ["Frontend Developer", "Backend Developer", "UI / UX Designer", "Web Developer", "Freelancer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    const currentChars = currentWord.slice(0, charIndex);
    
    textElement.textContent = currentChars;

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(type, 200);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, 100);
    } else if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 2000); // Hold the word for 2 seconds
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 200);
    }
}

type();

document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', event => {
        const faqItem = event.target.parentElement;
        faqItem.classList.toggle('active');
    })
})
