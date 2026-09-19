/* =========================
   PAGE NAVIGATION
   ========================= */
function startStory() {

    createConfetti();

    const welcome = document.querySelector(".welcome-screen");

    welcome.style.opacity = "0";

    setTimeout(function () {

        welcome.style.display = "none";

        document.getElementById("contentFrame").style.display = "block";

    }, 1200);

}

function createConfetti() {

    for (let i = 0; i < 35; i++) {

        const confetti = document.createElement("span");

        confetti.className = "confetti";

        confetti.innerHTML = "✦";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top =
            "-20px";

        confetti.style.fontSize =
            (10 + Math.random() * 12) + "px";

        confetti.style.animationDuration =
            (1.5 + Math.random() * 2) + "s";

        confetti.style.animationDelay =
            (Math.random() * 0.5) + "s";

        document.body.appendChild(confetti);

        setTimeout(function () {
            confetti.remove();
        }, 4000);
    }
}

/* =========================
   FLOATING BACKGROUND DECOR
   ========================= */

const symbols = ["♡", "✦", "✧", "♡", "✦"];

for (let i = 0; i < 35; i++) {

    const decoration = document.createElement("span");

    decoration.className = "floating-decoration";

    decoration.innerHTML =
        symbols[Math.floor(Math.random() * symbols.length)];

    decoration.style.left =
        Math.random() * 100 + "%";

    decoration.style.top =
        Math.random() * 100 + "%";

    decoration.style.fontSize =
        (10 + Math.random() * 18) + "px";

    decoration.style.animationDuration =
        (5 + Math.random() * 7) + "s";

    decoration.style.animationDelay =
        (Math.random() * 5) + "s";

    decoration.style.opacity =
        (0.2 + Math.random() * 0.45);

    document.body.appendChild(decoration);
}


/* =========================
   BIRTHDAY COUNTDOWN
   ========================= */

const birthdayDate =
    new Date("October 7, 2026 00:00:00").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const difference = birthdayDate - now;

    if (difference <= 0) {

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    document.getElementById("days").innerHTML =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerHTML =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerHTML =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerHTML =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(updateCountdown, 1000);

/* =========================
   REVEAL SECRET MESSAGE
   ========================= */

function revealMessage() {

    const message = document.getElementById("hiddenMessage");

    if (message.style.display === "block") {

        message.style.display = "none";

    } else {

        message.style.display = "block";

    }

}
/* =========================
   FINAL SURPRISE REVEAL
   ========================= */

function revealFinal() {

    const reveal = document.getElementById("finalReveal");

    if (reveal.style.display === "block") {

        reveal.style.display = "none";

    } else {

        reveal.style.display = "block";

    }

}

/* =========================
   BACKGROUND MUSIC
   ========================= */

const birthdayMusic = document.getElementById("birthdayMusic");
const musicButton = document.getElementById("musicButton");

function toggleMusic() {

    if (birthdayMusic.paused) {

        birthdayMusic.play();

        musicButton.innerHTML = "⏸️ Pause Our Song";

    } else {

        birthdayMusic.pause();

        musicButton.innerHTML = "🎵 Play Our Song";

    }

}