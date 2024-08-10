var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});


camera = document.getElementById("camera");



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function()
    {
        img_id = "image1";
        take_snapshot();
        synth = window.speechsynthesis;
        speak_data = "Taking your selfie in 5 seconds";
        var utterThis = newSpeechSynthesisUtterance(spaek_data);
        SpeechSynthesis.speak(utterThis);

    }, 5000 );

    setTimeout(function()
    {
        img_id = "image2";
        take_snapshot();
        speak_data = "Taking your selfie in 10 seconds";
        var utterThis = newSpeechSynthesisUtterance(spaek_data);
        SpeechSynthesis.speak(utterThis);

    }, 10000 );

    setTimeout(function()
    {
        img_id = "image1";
        take_snapshot();
        speak_data = "Taking your selfie in 15 seconds";
        var utterThis = newSpeechSynthesisUtterance(spaek_data);
        SpeechSynthesis.speak(utterThis);

    }, 15000 );


}

camera = document.getElementById("camera");

function take_snapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_uri) {

    if(img_id=="image1"){
        document.getElementById("result1").innerHTML = '<img id="image1" src="' +data_uri+'"/>';
        }

    if(img_id=="image2"){
        document.getElementById("result2").innerHTML = '<img id="image2" src="' +data_uri+'"/>';
        }

    if(img_id=="image3"){
        document.getElementById("result3").innerHTML = '<img id="image3" src="' +data_uri+'"/>';
        }

    });

}

