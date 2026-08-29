/* =========================
   OPEN RAKHI
========================= */

function openRakhi() {

    const welcome = document.getElementById("welcome");

    const mainPage = document.getElementById("mainPage");

    welcome.style.display = "none";

    mainPage.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================
   TIE RAKHI
========================= */

function tieRakhi() {

    const rakhi = document.getElementById("rakhiAnimation");

    const status = document.getElementById("rakhiStatus");

    rakhi.classList.add("tied");

    status.innerHTML =
        "🪢 Rakhi tied with all my love! ❤️";

    createHearts();

    setTimeout(() => {

        status.innerHTML =
            "This Rakhi may be virtual, but the love behind it is real. 🥹❤️";

    }, 1800);

}


/* =========================
   FINAL SURPRISE
========================= */

function showFinalSurprise() {

    const mainPage =
        document.getElementById("mainPage");

    const finalSection =
        document.getElementById("finalSection");

    mainPage.style.display = "none";

    finalSection.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    createHearts();

    createConfetti();

}


/* =========================
   HEARTS
========================= */

function createHearts() {

    for (let i = 0; i < 35; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.top =
            Math.random() * 100 + "vh";

        heart.style.fontSize =
            Math.random() * 25 + 15 + "px";

        heart.style.zIndex = "9999";

        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);


        heart.animate(

            [
                {
                    transform:
                        "translateY(0) scale(1)",

                    opacity: 1
                },

                {
                    transform:
                        "translateY(-250px) scale(1.5)",

                    opacity: 0
                }
            ],

            {
                duration: 2500,

                easing: "ease-out"
            }

        );


        setTimeout(() => {

            heart.remove();

        }, 2500);

    }

}


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const symbols = [
        "❤️",
        "💕",
        "💖",
        "🌸",
        "✨",
        "🎀",
        "🪢"
    ];


    for (let i = 0; i < 50; i++) {

        const piece =
            document.createElement("div");


        piece.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        piece.style.position = "fixed";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.top = "-40px";

        piece.style.fontSize =
            Math.random() * 20 + 15 + "px";

        piece.style.zIndex = "9999";

        piece.style.pointerEvents = "none";


        document.body.appendChild(piece);


        const duration =
            Math.random() * 2500 + 2500;


        piece.animate(

            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity: 1
                },

                {
                    transform:
                        "translateY(110vh) rotate(720deg)",

                    opacity: 0
                }
            ],

            {
                duration: duration,

                easing: "ease-in"
            }

        );


        setTimeout(() => {

            piece.remove();

        }, duration);

    }

}