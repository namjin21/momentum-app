const images = [
    "gyeongbok.jpg",
    "paris.jpg",
    "victoria.jpg",
]

const selectedImg = images[Math.floor(Math.random() * images.length)];
const imgElement = document.createElement("img");
imgElement.src = `img/${selectedImg}`;

document.body.appendChild(imgElement);