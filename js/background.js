const images = [
    "stars.jpg",
    "canyon.jpg",
    "mountain.jpg",
    "woods.jpg",
]

const selectedImg = images[Math.floor(Math.random() * images.length)];

document.body.background = `./img/${selectedImg}`;
