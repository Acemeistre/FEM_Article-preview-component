const buttons = document.querySelectorAll(".share-btn")

buttons.forEach((button) => button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded");
        if (isExpanded === "true") {
            button.setAttribute ("aria-expanded", "false") 
        } else { button.setAttribute ("aria-expanded", "true")
        }
}));