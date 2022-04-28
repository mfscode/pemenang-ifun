const cta = document.getElementById("mascot")
const header1 = document.getElementById("header1")
const page2 = document.getElementById("page2")
const overlay = document.getElementById("pemenang")
const backButton = document.getElementById("back")
const cards = document.getElementsByClassName("cards")
const overlays = {
    akustik: document.getElementById('akustik'),
    cci: document.getElementById('cci'),
    cipcer: document.getElementById('cipcer'),
    dai: document.getElementById('dai'),
    fashion: document.getElementById('fashion'),
    kaligrafi: document.getElementById('kaligrafi'),
    mhq: document.getElementById('mhq'),
    mtq: document.getElementById('mtq'),
    poster: document.getElementById('poster'),
    puisi: document.getElementById('puisi')
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
    page2.classList.toggle('clicked');
    backButton.style.opacity = "1";
    // document.getElementById("body").style.minHeight = "110vh";
    // document.getElementById("body").style.overflowY = "scroll"
}

function back() {
    page2.classList.toggle('clicked');
    overlays.akustik.style.display = "none";
    overlays.cci.style.display = "none";
    overlays.cipcer.style.display = "none";
    overlays.dai.style.display = "none";
    overlays.fashion.style.display = "none";
    overlays.kaligrafi.style.display = "none";
    overlays.mhq.style.display = "none";
    overlays.mtq.style.display = "none";
    overlays.poster.style.display = "none";
    overlays.puisi.style.display = "none";
    backButton.style.opacity = "0"
}