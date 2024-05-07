const slider = document.querySelector(".image-list"),
    firstImg = slider.querySelectorAll("img")[0],
    arrowIcons = document.querySelectorAll(".slide-button");


const showHideIcons = () => {
    let scrollWidth = slider.scrollWidth - slider.clientWidth;
    arrowIcons[0].style.display = slider.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = slider.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 18;
        slider.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
    });
});
