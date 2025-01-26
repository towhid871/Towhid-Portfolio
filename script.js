const navLinks = document.querySelectorAll('header nav a');
const logoLinks = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
})


const activePage =()=>{
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(()=>{
        header.classList.add('active');
    }, 1100);

    navLinks.forEach(Link=>{
        Link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(()=>{
        barsBox.classList.add('active');
    }, 1100);

    sections.forEach(section=>{
        section.classList.remove('active');
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}

navLinks.forEach((link,idx)=>{
    link.addEventListener('click', ()=>{
        if(!link.classList.contains('active')){
            activePage();

            link.classList.add('active');

            setTimeout(()=>{
                sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

logoLinks.addEventListener('click',()=>{
    if(!navLinks[0].classList.contains('active')){
        activePage();

        navLinks[0].classList.add('active');

        setTimeout(()=>{
            sections[0].classList.add('active');
        }, 1100);
    }
})

//for resume

const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx)=>{
    btn.addEventListener('click', ()=>{
        const resumeDetails= document.querySelectorAll('.resume-details');

        resumeBtns.forEach(btn=>{
            btn.classList.remove('active');

        });
        btn.classList.add('active');

        resumeDetails.forEach(detail=>{
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');

    });
});


// const arrowRight= document.querySelector('.portfolio-box .navigation .arrow-right');
// const arrowLeft= document.querySelector('.portfolio-box .navigation .arrow-left');

// let index=0;

// const activePortfolio=()=>{
//     const imgSlide= document.querySelector('.portfolio-carousel .img-slide');
//     imgSlide.style.transform = `translateX(calc(${inside * -100}% - ${index * 2}rem))`;


// } 

// arrowRight.addEventListener('click', ()=>{
//     if(index < 4){
//         index++;
//     }
//     else{
//         index=5;
//     }
//     activePortfolio();

// });

// arrowLeft.addEventListener('click', ()=>{
//     if(index > 1){
//         index--;
//     }
//     else{
//         index = 0;
//     }
//     activePortfolio();

// });

// const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
// const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

// let index = 0; // Current slide index
// const totalSlides = 5; // Total number of slides (adjust based on your carousel)

// // Function to update the active portfolio slide
// const activePortfolio = () => {
//     const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
//     imgSlide.style.transform = `translateX(-${index * 100}%)`; // Move based on index
// };

// // Right arrow click handler
// arrowRight.addEventListener('click', () => {
//     if (index < totalSlides - 1) {
//         index++;
//         arrowLeft.classList.remove('disabled');
//     }
//     activePortfolio();
// });

// // Left arrow click handler
// arrowLeft.addEventListener('click', () => {
//     if (index > 0) {
//         index--;
//         arrowRight.classList.remove('disabled');
//     }
//     activePortfolio();
// });

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0; // Current slide index
const totalSlides = 5; // Total number of slides (adjust based on your carousel)

// Function to update the active portfolio slide
const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-details');
    imgSlide.style.transform = `translateX(-${index * 100}%)`; // Move based on index

    portfolioDetails.forEach(detail=>{
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');

    // Disable or enable arrows based on index
    if (index === 0) {
        arrowLeft.classList.add('disabled');
    } else {
        arrowLeft.classList.remove('disabled');
    }

    if (index === totalSlides - 1) {
        arrowRight.classList.add('disabled');
    } else {
        arrowRight.classList.remove('disabled');
    }
};

// Right arrow click handler
arrowRight.addEventListener('click', () => {
    if (index < totalSlides - 1) {
        index++;
        activePortfolio();
    }
});

// Left arrow click handler
arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
        activePortfolio();
    }
});

// Initialize the portfolio state
activePortfolio();



