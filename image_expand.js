let images = document.getElementsByClassName("preview-img");
let imageBackground = document.createElement("div");
imageBackground.classList.add("background-shade");

// document.body.appendChild(imageBackground);

let image_expanded = -1;

function unexpand() {
    image_expanded = -1;
    for (const expanded of document.getElementsByClassName("expanded-img")) {
        expanded.classList.remove("expanded-img");
    }
    imageBackground.classList.remove("shade-visible");
}

imageBackground.addEventListener("click", () => {
    if (image_expanded != -1) {
        unexpand();
    }
})

for (let index=0; index < images.length; index++) {
    const image = images[index];
    image.addEventListener("click", () => {
        if (image_expanded === -1) {
            image_expanded = index;
            image.classList.add("expanded-img");
            imageBackground.classList.add("shade-visible");
        } else if (image_expanded === index) {
            unexpand();
        }
    })
}