const cta = document.getElementById("mascot")
const header1 = document.getElementById("header1")
const page2 = document.getElementById("page2")
const overlay = document.getElementById("pemenang")
const backButton = document.getElementById("back")
const cards = document.getElementsByClassName("cards")
const overlays = {
    akustik: document.getElementById('akustik'),
    cci: document.getElementById('akustik'),
    cipcer: document.getElementById('akustik'),
    dai: document.getElementById('akustik'),
    fashion: document.getElementById('akustik'),
    kaligrafi: document.getElementById('akustik'),
    mhq: document.getElementById('akustik'),
    mtq: document.getElementById('akustik'),
    poster: document.getElementById('akustik'),
    puisi: document.getElementById('akustik')
}

cta.addEventListener("click", () => {
    cta.classList.add("hidden");
    header1.classList.add("hidden");
    page2.classList.add("display");
})

function loaded() {
    cta.classList.remove("hidden");
    header1.classList.remove("hidden");
    page2.classList.remove("display clicked");
    overlay.classList.remove("display")
}

function clicked() {
    page2.classList.add('clicked');
    backButton.classList.add('appear');
    overlays.akustik.style.display = "flex"
}

function back() {
    page2.classList.remove('clicked');
    overlays.akustik.style.display = "none";
    backButton.classList.remove('appear')
}