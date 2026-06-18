/* =====================================
   PORTFOLIO JAVASCRIPT
   Author: Your Name
===================================== */

/* =====================================
   TYPING EFFECT
===================================== */

const typingText = document.getElementById("typing");

const roles = [
    "ComputerScience and engineering",
    "Data Analytics Enthusiast",
    "Web Developer",
    "Python Programmer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? 60 : 120
    );
}

typeEffect();

/* =====================================
   REVEAL ON SCROLL
===================================== */

const reveals =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }
            });

        },
        {
            threshold: 0.15
        }
    );

reveals.forEach((element) => {
    revealObserver.observe(element);
});

/* =====================================
   ANIMATE SKILL BARS
===================================== */

const skillBars =
    document.querySelectorAll(".progress-bar");

const skillObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    const width =
                        entry.target.dataset.width;

                    entry.target.style.width =
                        width;
                }

            });

        },
        {
            threshold: 0.3
        }
    );

skillBars.forEach((bar) => {
    skillObserver.observe(bar);
});

/* =====================================
   MOBILE MENU TOGGLE
===================================== */

const menuButton =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {

    if (
        navLinks.style.display === "flex"
    ) {

        navLinks.style.display = "none";

    } else {

        navLinks.style.display = "flex";

        navLinks.style.flexDirection =
            "column";

        navLinks.style.position =
            "absolute";

        navLinks.style.top = "80px";

        navLinks.style.right = "20px";

        navLinks.style.padding = "20px";

        navLinks.style.borderRadius = "15px";

        navLinks.style.background =
            "rgba(17,24,39,0.95)";

        navLinks.style.backdropFilter =
            "blur(15px)";
    }

});

/* =====================================
   CLOSE MENU AFTER CLICK
===================================== */

document
    .querySelectorAll(".nav-links a")
    .forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                if (
                    window.innerWidth <= 768
                ) {

                    navLinks.style.display =
                        "none";
                }

            }
        );

    });

/* =====================================
   NAVBAR SCROLL EFFECT
===================================== */

const navbar =
    document.querySelector(".navbar");

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 50
        ) {

            navbar.style.background =
                "rgba(0,0,0,0.7)";

            navbar.style.boxShadow =
                "0 10px 30px rgba(0,0,0,.3)";

        } else {

            navbar.style.background =
                "rgba(0,0,0,0.25)";

            navbar.style.boxShadow =
                "none";
        }

    }
);

/* =====================================
   ACTIVE NAVIGATION LINK
===================================== */

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(
        ".nav-links a"
    );

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 120;

            const sectionHeight =
                section.clientHeight;

            if (
                pageYOffset >= sectionTop
            ) {

                current =
                    section.getAttribute("id");
            }

        });

        navItems.forEach((link) => {

            link.classList.remove(
                "active-link"
            );

            if (
                link.getAttribute("href")
                === "#" + current
            ) {

                link.classList.add(
                    "active-link"
                );
            }

        });

    }
);

/* =====================================
   CONTACT FORM DEMO
===================================== */

const contactForm =
    document.querySelector(
        ".contact-form"
    );

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        (e) => {

            e.preventDefault();

            alert(
                "Message Sent Successfully!"
            );

            contactForm.reset();

        }
    );
}

/* =====================================
   HERO IMAGE FLOAT EFFECT
===================================== */

const heroImage =
    document.querySelector(
        ".hero-image img"
    );

if (heroImage) {

    setInterval(() => {

        heroImage.style.transform =
            "translateY(-10px)";

        setTimeout(() => {

            heroImage.style.transform =
                "translateY(0px)";

        }, 1000);

    }, 2000);
}

/* =====================================
   YEAR AUTO UPDATE
===================================== */

const footer =
    document.querySelector("footer p");

if (footer) {

    const year =
        new Date().getFullYear();

    footer.innerHTML =
        `© ${year} Your Name. All Rights Reserved.`;
}

console.log(
    "Portfolio Loaded Successfully 🚀"
);

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.send(

       "service_t5ovdsn",

       "template_n7t4q1f",

        {

            from_name: document.getElementById("name").value,

            from_email: document.getElementById("email").value,

            subject: document.getElementById("subject").value,

            message: document.getElementById("message").value

        }

    ).then(function(){

        alert("Message Sent Successfully!");

        form.reset();

    }).catch(function(error){

       console.log("EmailJS Error:", error);

    alert("Error: " + JSON.stringify(error));

    });

});
 