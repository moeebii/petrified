navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
        var video = document.getElementById('webcam');
        video.srcObject = stream;
    })
    .catch(function (err) {
        console.error('Error accessing the webcam: ', err);
    });
var images = [
    "scan1.png",
    "scan2.png",
    "scan3.png",
    "scan4.png",
    "scan5.png",
    "scan6.png",
    "scan7.png",
    "scan8.png",
    "scan9.png",
    "scan10.png",
    "scan11.png",
    "scan12.png",
    "scan13.png",
    "scan14.png",
    "scan15.png",
    "scan16.png",
    "scan17.png",
    "scan18.png",
    "scan19.png",
    "scan20.png",
    "scan21.png",
    "scan22.png",
    "scan23.png",
    "scan24.png",
    "scan25.png",
    "scan26.png"
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
