
var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

camera = document.getElementById("camera");

function start()
{
document.getElementById("textbox").innerHTML="";
}

camera = document.getElementById("camera");
Webcam.set({
width:500,
height:400,
image_format : 'jpeg',
jpeg_quality:90
});

function speak(){

setTimeout(function(){
img_id= "selfie1";
speak_data= "taking your next selfie in 10 seconds";
var utterThis = new SpeechSynthesisUtterance(speak_data);
SpeechSynthesis.speak(utterThis);
take_snapshot();
save();
},10000);
Webcam.attach(camera);

}

Webcam.set(
{
width: 360,
height: 250,
image_format: 'png',
png_quality: 90
}
);

function take_snapshot()
{
console.log(img_id);

Webcam.snap(function(data_uri)
{
if(img_id=="selfie1"){
document.getElementById("result1").innerHTML = '<img_id="selfie1" src="'+data_uri+'"/>';
}

if(img_id=="selfie2"){
document.getElementById("result2").innerHTML = '<img_id="selfie2" src="'+data_uri+'"/>';
}

if(img_id=="selfie3"){
document.getElementById("result3").innerHTML = '<img_id="selfie3" src="'+data_uri+'"/>';
}
});
}

function save()
{
link = document.getElementById("link");
image = document.getElementById("selfie_image").src ;
link.href = image;
link.click();
}

Webcam.snap(function(data_url)
{
document.getElementById("result").innerHTML='<img id="selfie1" src="'+data_url+'">';


});