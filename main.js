var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

        function take_snap() {
            ﻿

            


            console.log(img_id);
            Webcam.snap(function(data_uri){
            if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML='<img id="selfie1" src="'+data_uri+'"/>';
            }

            if(img_id=="selfie2"){
            }
            
            document.getElementById("result2").innerHTML='<img id="selfie2" src="'+data_uri+'"/>';
            if(img_id=="selfie3"){
            }
            });
            
            document.getElementById("result3").innerHTML='<img id="selfie3" src="'+data_uri+'"/>';
        }
    }
    
        
        
    
        
        

    
        
        setTimeout(function() {
            img_id = 'selfie2';
            take_snap();
            speak_data = "Get ready for another selfie in 5 seconds";
            utterThis = new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis); 
        }, 5000);
    
        
        setTimeout(function() {
            img_id = 'selfie2';
            take_snap();
            speak_data = "Get ready for another selfie in 10 seconds";
            utterThis = new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);
        }, 10000);
    
        
        setTimeout(function() {
            img_id = 'selfie3';
            take_snap();
            speak_data = "Final selfie in 15 seconds";
            utterThis = new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);
        }, 15000);
    
        function save()
        {
            link=document.getElementById("link");
            image=document.getElementById("selfie_image").src;
            link.href= image;
            link.click();
        }
        

