// LOAD HTML FILES

async function loadHTML(id, file){

    const response = await fetch(file);

    const data = await response.text();

    document.getElementById(id).innerHTML = data;

}

async function initializeWebsite(){

    await loadHTML("nav-placeholder", "nav.html");

    await loadHTML("body-placeholder", "body.html");

    await loadHTML("footer-placeholder", "footer.html");



    // REVEAL ANIMATION

    const reveals = document.querySelectorAll('.reveal');

    function revealSections(){

        reveals.forEach(section => {

            const windowHeight = window.innerHeight;

            const sectionTop = section.getBoundingClientRect().top;

            if(sectionTop < windowHeight - 100){

                section.classList.add('active');

            }

        });

    }

    window.addEventListener('scroll', revealSections);

    revealSections();



    // SKILL BAR ANIMATION

    const progressBars = document.querySelectorAll('.progress-fill');

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                const bar = entry.target;

                const width = bar.getAttribute('data-width');

                setTimeout(() => {

                    bar.style.width = width;

                },300);

            }

        });

    },{
        threshold:0.5
    });

    progressBars.forEach(bar => {

        observer.observe(bar);

    });



    // PROJECT BUTTONS

    const projectButtons = document.querySelectorAll('.project-btn');

    projectButtons.forEach(button => {

        button.addEventListener('click', () => {

            button.innerText = 'You Have Viewed the Project ✓';

            button.style.background = '#32ff00';

            button.style.color = '#000';

            button.disabled = true;

        });

    });



    // CONTACT FORM

    const form = document.getElementById('contactForm');

    const sendBtn = document.getElementById('sendBtn');

    form.addEventListener('submit', function(e){

        e.preventDefault();

        sendBtn.innerText = 'Message Sent ✓';

        sendBtn.style.background = '#32ff00';

        sendBtn.style.color = '#000';

        sendBtn.disabled = true;

        setTimeout(() => {

            form.reset();

            sendBtn.innerText = 'Send Message';

            sendBtn.style.background = '#163cff';

            sendBtn.style.color = '#fff';

            sendBtn.disabled = false;

        },3000);

    });



    // HAMBURGER

    const hamburger = document.getElementById('hamburger');

    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {

        navLinks.classList.toggle('active');

    });

}

initializeWebsite();