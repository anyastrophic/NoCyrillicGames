cyrillicPattern = /[\u0400-\u04FF]+/; // goofy ass shit "has been declared already :nerd:"

for (const element of document.querySelectorAll("li")) { // this checks if there are any bad games on the page with the scrollers
    if (cyrillicPattern.test(element.title) & element.className === 'list-item game-card game-tile') {
        element.remove()
        console.log(`Removed ${element.title} from scroller`)
    }
}

for (const element of document.querySelectorAll("div")) { // this checks if there are any bad games on the page after clicking view all
    if (cyrillicPattern.test(element.title) & element.className === 'game-card-name game-name-title') {
        element.parentElement.parentElement.remove()
        console.log(`Removed ${element.title} from big view`)
    }
}