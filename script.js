const cta = document.getElementById("mascot")
const header1 = document.getElementById("header1")
const page2 = document.getElementById("page2")
const overlay = document.getElementById("pemenang")
const backButton = document.getElementById("back")
const cards = document.getElementsByClassName("cards")

cta.addEventListener("click", () => {
    cta.classList.add("hidden");
    header1.classList.add("hidden");
    page2.classList.add("display");
})

backButton.addEventListener("click", back())

function loaded() {
    cta.classList.remove("hidden");
    header1.classList.remove("hidden");
    page2.classList.remove("display clicked");
    overlay.classList.remove("display")
}

function clicked() {
    page2.classList.add('clicked');
}

function back() {
    page2.classList.remove('clicked')
}