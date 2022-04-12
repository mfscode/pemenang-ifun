const cta = document.getElementById("mascot")
const header1 = document.getElementById("header1")
const page2 = document.getElementById("page2")
const overlay = document.getElementById("pemenang")

cta.addEventListener("click", () => {
    cta.classList.add("hidden");
    header1.classList.add("hidden");
    page2.classList.add("display");
})

const loaded = () => {
    cta.classList.remove("hidden");
    header1.classList.remove("hidden");
    page2.classList.remove("display");
    overlay.classList.remove("display")
}