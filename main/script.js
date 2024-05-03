navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
        var video = document.getElementById('webcam');
        video.srcObject = stream;
    })
    .catch(function (err) {
        console.error('Error accessing the webcam: ', err);
    });
var images = [
    "scan1.jpeg",
    "scan2.jpeg",
    "scan3.jpeg",
    "scan4.jpeg",
    "scan5.jpeg",
    "scan6.jpeg",
    "scan7.jpeg"
];

function getRandomImage() {
    var randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

function shuffleImage() {
    document.getElementById("random-img").src = getRandomImage();
}

shuffleImage();

setInterval(shuffleImage, 1000);
