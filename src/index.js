import "./styles.css";
import { createCursor } from "./cursor";
import { viewRecipeA } from "./rec_a";
import { viewRecipeB } from "./rec_b";

createCursor()

const recipeButtons = Array.from(document.querySelectorAll(".recipe"))

recipeButtons[0].addEventListener("click", () => {
    viewRecipeA()
})

recipeButtons[1].addEventListener("click", () => {
    viewRecipeB()
})