function viewRecipe(index) {
    const container = document.querySelector("main .container")
    container.classList.add("hide")
    const recipe = document.querySelector(`[data-number="${index}"]`)
    recipe.classList.remove("hide")

    const resets = Array.from(document.querySelectorAll(".reset-button"))
    resets.forEach(reset => {
        reset.addEventListener("click", () => {
            container.classList.remove("hide")
            recipe.classList.add("hide")
        })
    })
}

export { viewRecipe }