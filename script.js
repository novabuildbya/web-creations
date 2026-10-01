/* =====================================================
   MAHIMA BIRTHDAY SURPRISE
   JAVASCRIPT
===================================================== */

const slides =
    document.querySelectorAll(".slide");

const dots =
    document.querySelectorAll(".dot");

const app =
    document.getElementById("birthdayApp");

const petals =
    document.getElementById("petals");

let currentSlide = 0;

let isAnimating = false;


/* =====================================================
   INITIAL SETUP
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        showSlide(0);

        createPetals();

    }
);


/* =====================================================
   SHOW SLIDE
===================================================== */

function showSlide(index) {

    if (index < 0) {
        index = 0;
    }

    if (index >= slides.length) {
        index = slides.length - 1;
    }

    slides.forEach(
        function (slide, i) {

            slide.classList.toggle(
                "active",
                i === index
            );

        }
    );


    dots.forEach(
        function (dot, i) {

            dot.classList.toggle(
                "active",
                i === index
            );

        }
    );


    currentSlide = index;

}


/* =====================================================
   NEXT SLIDE
===================================================== */

function nextSlide() {

    if (isAnimating) {
        return;
    }

    isAnimating = true;


    if (currentSlide < slides.length - 1) {

        currentSlide++;

        showSlide(currentSlide);

        createPetals();

    }


    setTimeout(
        function () {

            isAnimating = false;

        },
        700
    );

}


/* =====================================================
   PREVIOUS SLIDE
===================================================== */

function previousSlide() {

    if (isAnimating) {
        return;
    }

    if (currentSlide > 0) {

        currentSlide--;

        showSlide(currentSlide);

    }

}


/* =====================================================
   OPEN SURPRISE
===================================================== */

function openSurprise() {

    const openingCard =
        document.querySelector(
            ".opening-card"
        );


    if (openingCard) {

        openingCard.classList.add(
            "opened"
        );

    }


    createPetals();


    setTimeout(
        function () {

            nextSlide();

        },
        1000
    );

}


/* =====================================================
   RESTART
===================================================== */

function restartPage() {

    currentSlide = 0;

    showSlide(0);

    createPetals();

}


/* =====================================================
   PETALS
===================================================== */

function createPetals() {

    if (!petals) {
        return;
    }


    const symbols = [
        "🌸",
        "🌷",
        "✿",
        "·",
        "✦"
    ];


    for (
        let i = 0;
        i < 8;
        i++
    ) {

        const petal =
            document.createElement(
                "span"
            );


        petal.className =
            "petal";


        petal.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        petal.style.left =
            Math.random() * 100 + "%";


        petal.style.animationDuration =
            (5 + Math.random() * 5) + "s";


        petal.style.animationDelay =
            Math.random() * 2 + "s";


        petal.style.fontSize =
            (8 + Math.random() * 9) + "px";


        petals.appendChild(
            petal
        );


        setTimeout(
            function () {

                petal.remove();

            },
            12000
        );

    }

}


/* =====================================================
   KEYBOARD NAVIGATION
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "ArrowRight" ||
            event.key === " "
        ) {

            event.preventDefault();

            nextSlide();

        }


        if (
            event.key === "ArrowLeft"
        ) {

            previousSlide();

        }

    }
);


/* =====================================================
   TOUCH SWIPE
===================================================== */

let touchStartX = 0;

let touchEndX = 0;


document.addEventListener(
    "touchstart",
    function (event) {

        touchStartX =
            event.changedTouches[0].screenX;

    },
    {
        passive: true
    }
);


document.addEventListener(
    "touchend",
    function (event) {

        touchEndX =
            event.changedTouches[0].screenX;


        handleSwipe();

    },
    {
        passive: true
    }
);


function handleSwipe() {

    const distance =
        touchEndX - touchStartX;


    if (Math.abs(distance) < 50) {
        return;
    }


    if (distance < 0) {

        nextSlide();

    } else {

        previousSlide();

    }

}


/* =====================================================
   PREVENT DOUBLE TAP ZOOM
===================================================== */

let lastTap = 0;


document.addEventListener(
    "touchend",
    function (event) {

        const now =
            Date.now();


        if (
            now - lastTap < 300
        ) {

            event.preventDefault();

        }


        lastTap = now;

    },
    {
        passive: false
    }
);


/* =====================================================
   OPTIONAL AUTO PETALS
===================================================== */

setInterval(
    function () {

        if (
            currentSlide === 0 ||
            currentSlide === 5 ||
            currentSlide === 6
        ) {

            createPetals();

        }

    },
    7000
);