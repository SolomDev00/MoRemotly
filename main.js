// =====================  NAVBAR =====================
// for desktop
let allLinks = Array.from(
    document.querySelectorAll("#mainNav .containerNav #menu a")
);
let allLinksPhone = Array.from(
    document.querySelectorAll("#navPhone #menu a")
);
resetBtns = (id) => {
    allLinks.forEach((e) => {
        e.classList.remove("active")
    });
    document.getElementById(id).classList.add("active");
    if (id == "link1") {
        window.scrollTo(0, 0);
    }
    if (id == "link2") {
        window.scrollTo(0, 662);
    }
    if (id == "link3") {
        window.scrollTo(0, 1273);
    }
    if (id == "link4") {
        window.scrollTo(0, 2805);
    }
    if (id == "cntct") {
        window.scrollTo(0, 4120);
    }
};
// for phone

function closeNavMenu() {
    menuIcon.style.transform = "scale(1)";
    document.querySelector("#menuIcon .up").style.transform = "rotate(0deg)";
    document.querySelector("#menuIcon .up").style.width = "40px";
    document.querySelector("#menuIcon .middle").style.opacity = "1";
    document.querySelector("#menuIcon .bottom").style.transform = "rotate(0deg)";
    document.querySelector("#menuIcon .bottom").style.width = "40px";
}

function openNavMenu() {
    menuIcon.style.transform = "scale(1.1)";
    document.querySelector("#menuIcon .up").style.transform = "rotate(45deg)";
    document.querySelector("#menuIcon .up").style.width = "32px";
    document.querySelector("#menuIcon .middle").style.opacity = "0";
    document.querySelector("#menuIcon .bottom").style.transform = "rotate(-45deg)";
    document.querySelector("#menuIcon .bottom").style.width = "32px";
}
// open navBar
let menuIcon = document.getElementById("menuIcon");
let navOpened = false;
menuIcon.onclick = () => {
        if (navOpened == false) {
            //icon
            openNavMenu();
            // nav
            navPhone.style.opacity = "1";
            navPhone.style.pointerEvents = "auto";
            navOpened = true;
        } else {
            //icon
            closeNavMenu();
            // nav
            navPhone.style.opacity = "0";
            navPhone.style.pointerEvents = "none";
            navOpened = false;
        }
    }
    // hide navBar
let navPhone = document.getElementById("navPhone")
phoneLinks = (id) => {
    navPhone.style.opacity = "0";
    navPhone.style.pointerEvents = "none";
    closeNavMenu();
    navOpened = false;
    // go
    if (id == "link1Phone") {
        window.scrollTo(0, 0);
    }
    if (id == "link2Phone") {
        window.scrollTo(0, 965);
    }
    if (id == "link3Phone") {
        window.scrollTo(0, 2088);
    }
    if (id == "link4Phone") {
        window.scrollTo(0, 3892);
    }

}

// ===================    Type Writing   ======================

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Software Mobile Remotely", "Embedded Systems Software", "Leader Community ICPC EST", "Desktop Developer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// ===================    Scroll   ======================

window.onscroll = () => {
    if (this.scrollY >= 290 && this.scrollY <= 1310) {
        document.getElementById("evo1").style.width = "605px";
        document.getElementById("evo1").style.height = "21px";
        // progress of skills function
        setTimeout(() => {
            document.getElementById("evo2").style.width = "545px";
            document.getElementById("evo2").style.height = "21px";
            setTimeout(() => {
                document.getElementById("evo3").style.width = "515px";
                document.getElementById("evo3").style.height = "21px";
            }, 200);
        }, 200);
    } else {
        document.getElementById("evo1").style.width = "0";
        // progress of skills function
        setTimeout(() => {
            document.getElementById("evo2").style.width = "0";
            setTimeout(() => {
                document.getElementById("evo3").style.width = "0";
            }, 1);
        }, 1);
    }
}

// ===================    Loading   ======================


let bgLoading = document.getElementById("bgLoading")
let bgLoadingCont = document.querySelector("#bgLoading .loader")
window.onload = () => {
    setTimeout(function() {
        bgLoadingCont.style.opacity = "0";
        bgLoading.style.pointerEvents = "none";
        bgLoading.style.backdropFilter = "blur(0px)";
        setTimeout(function() {
            bgLoadingCont.style.display = "none";
            bgLoading.style.display = "none";
        }, 2500)
    }, 2500)
}

// ===================    Scroll   ======================

$(".option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
  });

 AOS.init();
