/* ==========================================
   ORBIT DRIVING SCHOOL
   script.js
========================================== */

// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e){

        const target = this.getAttribute('href');

        if(target.startsWith("#")){

            e.preventDefault();

            document.querySelector(target).scrollIntoView({
                behavior:'smooth'
            });

        }

    });
});


// Sticky Header Shadow

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>50){

        header.style.background="#111";
        header.style.boxShadow="0 5px 20px rgba(0,0,0,.25)";

    }else{

        header.style.boxShadow="none";

    }

});


// Fade Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".service-card,.testimonial-card,.gallery-grid img,.about-content,.contact-box").forEach(el=>{

observer.observe(el);

});


// Current Year

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML="© "+new Date().getFullYear()+" Orbit Driving School | All Rights Reserved";

}


// Contact Form

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank You! We will contact you soon.");

form.reset();

});

}
