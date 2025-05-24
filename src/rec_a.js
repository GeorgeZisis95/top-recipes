function viewRecipeA() {
    const container = document.querySelector("main .container")
    container.classList.add("hide")
    const recipe = document.querySelector(".recipe-container")
    recipe.classList.remove("hide")

    recipe.textContent = ""

    const reset = document.createElement("button")
    reset.classList.add("reset-button")
    reset.textContent = "Return to Home"
    reset.addEventListener("click", () => {
        container.classList.remove("hide")
        recipe.classList.add("hide")
    })
    recipe.appendChild(reset)
}

export { viewRecipeA }