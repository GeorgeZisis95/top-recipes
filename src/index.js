import "./styles.css";
import { createCursor } from "./cursor";
import { viewRecipe } from "./toggle_view";

createCursor()

const recipeButtons = Array.from(document.querySelectorAll(".recipe"))
for (let i = 0; i < recipeButtons.length; i++) {
    recipeButtons[i].addEventListener("click", () => {
        viewRecipe(i)
    })
}