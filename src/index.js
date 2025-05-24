import "./styles.css";

const cursorDot = document.querySelector(".cursor-dot")
const cursorOutline = document.querySelector(".cursor-outline")

window.addEventListener("mousemove", (event) => {
    const posX = event.clientX
    const posY = event.clientY

    cursorDot.style.left = `${posX}px`
    cursorDot.style.top = `${posY}px`

    cursorOutline.style.left = `${posX}px`
    cursorOutline.style.top = `${posY}px`

    cursorOutline.animate(
        {
            left: `${posX}px`,
            top: `${posY}px`,
        },
        {
            duration: 500,
            fill: "backwards"
        }
    )

    if (event.target.nodeName === "BUTTON") {
        cursorDot.classList.add("active")
        cursorOutline.classList.add("active")
    } else {
        cursorDot.classList.remove("active")
        cursorOutline.classList.remove("active")
    }
})