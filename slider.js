const slider = document.querySelector(".image-list"),
    firstImg = slider.querySelectorAll("img")[0],
    arrowIcons = document.querySelectorAll(".slide-button");

const imageList = document.querySelector(".image-list");
let imageArray = [];

async function getImages() {
    try {
        const response = await fetch(`./info.json`);
        const images = await response.json();
        imageArray = images.movies;
        makeImageList(imageArray);
    } catch (error) {
        console.log(error);
    }
}

function makeImageList(array) {
    array.forEach((element) => {
        const { title, img } = element;
        const imgCard = ` <img class="image-item" alt="${title}" src="${img}">`;
        imageList.insertAdjacentHTML("beforeend", imgCard);
    })
}

getImages();


const showHideIcons = () => {
    let scrollWidth = slider.scrollWidth - slider.clientWidth;
    arrowIcons[0].style.display = slider.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = slider.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // let firstImgWidth = firstImg.offsetWidth + 18;
        let firstImgWidth = 194;
        slider.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
    });
});
