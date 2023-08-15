var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox");

function start() {
  Textbox.innerHTML = "";
  recognition.start();
}

recognition.onresult = function (event) {

  console.log(event);

  var Content = event.results[0][0].transcript;

  Textbox.innerHTML = Content;
  console.log(Content);
  if (Content == "Selfie.") {
    console.log("tirando selfie --- ");
    speak();
  }
}
function speak() {
  var synth = window.speechSynthesis
  var speakData = "tirando a sua selfie em 10 segundos"
  var utterThis = new SpeechSynthesisUtterance(speakData);
  synth.speak(utterThis)
  Webcam.attach(camera)
  setTimeout(function () {
    takeselfie()
    save()
  }, 10000)
}
camera = document.getElementById("camera")
webcam.set({
  width: 360,
  height: 250,
  image_format: "png",
  png_quality: 90
})
function takeselfie() {
  Webcam.snap(function (data_uri) {
    document.getElementById("result").innerHTML = '<img id="selfieImage" src="' + data_uri + '"/>';
  });
}

function save() {
  link = document.getElementById("link");
  image = document.getElementById("selfieImage").src;
  link.href
    = image; link.click();
}