function viewRecipeB() {
    const container = document.querySelector("main .container")
    container.classList.add("hide")
    const recipe = document.querySelector(".recipe-container")
    recipe.classList.remove("hide")
    recipe.textContent = "Another world"
}

export { viewRecipeB }