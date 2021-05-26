const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");


const getImage = async function () {
    const url = "https://picsum.photos/v2/list?limit=10";
    const res = await fetch(url)
    const images = await res.json();
    console.log(images);
    selectRandomImage(images)
}


const selectRandomImage = function (images) {
    const randomIndex = Math.floor(Math.random() * images.length)
    const randomImg = images[randomIndex];
   displayImage(randomImg)
}


const displayImage = function (randomImage) {
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    authorSpan.innerText = author;
    img.setAttribute('src', imageAddress);
    imgDiv.classList.remove("hide");
}

button.addEventListener('click', function () {
    getImage();
});

