$(document).ready(function() {
    $('#dock2').Fisheye({
        maxWidth: 23,
        items: 'a',
        itemsText: 'span',
        container: '.dock-container2',
        itemWidth: 47,
        proximity: 65,
        alignment : 'left',
        valign: 'bottom',
        halign : 'center'
    })
});

function couleurmessage(){
    document.getElementById('message1').style.backgroundColor="#353f4a";
    document.getElementById('message2').style.backgroundColor="#353f4a";
    document.getElementById('message3').style.backgroundColor="#353f4a";
    document.getElementById('message4').style.backgroundColor="#353f4a";
    document.getElementById('message5').style.backgroundColor="#353f4a";
    document.getElementById('message6').style.backgroundColor="#353f4a";
    document.getElementById('message7').style.backgroundColor="#353f4a";
    document.getElementById('message8').style.backgroundColor="#353f4a";
    document.getElementById('message9').style.backgroundColor="#353f4a";
    document.getElementById('message10').style.backgroundColor="#353f4a";
    
    document.getElementById('contenumessage1').style.display="none";
    document.getElementById('contenumessage2').style.display="none";
    document.getElementById('contenumessage3').style.display="none";
    document.getElementById('contenumessage4').style.display="none";
    document.getElementById('contenumessage5').style.display="none";
    document.getElementById('contenumessage6').style.display="none";
    document.getElementById('contenumessage7').style.display="none";
    document.getElementById('contenumessage8').style.display="none";
    document.getElementById('contenumessage9').style.display="none";
    document.getElementById('contenumessage10').style.display="none";
}
function message1(){
    document.getElementById('message1').style.backgroundColor="#0068e1";
    document.getElementById('contenumessage1').style.display="block";
}
function message2(){
    document.getElementById('message2').style.backgroundColor="#0068e1";
    document.getElementById('contenumessage2').style.display="block";
}
function message3(){
    document.getElementById('message3').style.backgroundColor="#0068e1";
    document.getElementById('contenumessage3').style.display="block";
}
function message4(){
    document.getElementById('message4').style.backgroundColor="#0068e1";
    document.getElementById('contenumessage4').style.display="block";
}
function message5(){
    document.getElementById('message5').style.backgroundColor="#0068e1";
    document.getElementById('contenumessage5').style.display="block";
}
function message6(){
    document.getElementById('message6').style.backgroundColor="#0068e1";
    document.getElementById('contenumessage6').style.display="block";
}
function message7(){
    document.getElementById('message7').style.backgroundColor="#0068e1";
    document.getElementById('contenumessage7').style.display="block";
}
function message8(){
    document.getElementById('message8').style.backgroundColor="#0068e1";
    document.getElementById('contenumessage8').style.display="block";
}
function message9(){
    document.getElementById('message9').style.backgroundColor="#0068e1";
    document.getElementById('contenumessage9').style.display="block";
}
function message10(){
    document.getElementById('message10').style.backgroundColor="#0068e1";
    document.getElementById('contenumessage10').style.display="block";
}

function mail(){
    document.getElementById('mail').style.display="block";
    document.getElementById('safari').style.display="none";
    document.getElementById('facetime').style.display="none";
    document.getElementById('message').style.display="none";
    document.getElementById('photos').style.display="none";
}
function photos(){
    document.getElementById('photos').style.display="block";
    document.getElementById('mail').style.display="none";
    document.getElementById('safari').style.display="none";
    document.getElementById('facetime').style.display="none";
    document.getElementById('message').style.display="none";
}
function safari(){
    document.getElementById('safari').style.display="block";
    document.getElementById('mail').style.display="none";
    document.getElementById('facetime').style.display="none";
    document.getElementById('message').style.display="none";
    document.getElementById('photos').style.display="none";
}
function cachermail(){
    document.getElementById('mail').style.display="none";
}
function facetime(){
    document.getElementById('facetime').style.display="block";
    document.getElementById('safari').style.display="none";
    document.getElementById('mail').style.display="none";
    document.getElementById('message').style.display="none";
    document.getElementById('photos').style.display="none";
}
function cacherfacetime(){
    document.getElementById('facetime').style.display="none";
}
function cachersafari(){
    document.getElementById('safari').style.display="none";
}
function message(){
    document.getElementById('message').style.display="block";
    document.getElementById('safari').style.display="none";
    document.getElementById('facetime').style.display="none";
    document.getElementById('mail').style.display="none";
    document.getElementById('photos').style.display="none";
}
function cachermessage(){
    document.getElementById('message').style.display="none";
}

function afficherBoutonsfb(){
    document.getElementById('reducefb').style.display="block";
    document.getElementById('extendfb').style.display="block";
    document.getElementById('closefb').style.display="block";
}
function cacherBoutonsfb(){
    document.getElementById('reducefb').style.display="none";
    document.getElementById('extendfb').style.display="none";
    document.getElementById('closefb').style.display="none";
}
function cacherBoutonssafari(){
    document.getElementById('reducesafari').style.display="none";
    document.getElementById('extendsafari').style.display="none";
    document.getElementById('closesafari').style.display="none";
}
function afficherBoutonsmessage(){
    document.getElementById('reducemessage').style.display="block";
    document.getElementById('extendmessage').style.display="block";
    document.getElementById('closemessage').style.display="block";
}
function afficherBoutonssafari(){
    document.getElementById('reducesafari').style.display="block";
    document.getElementById('extendsafari').style.display="block";
    document.getElementById('closesafari').style.display="block";
}
function cacherBoutonsmessage(){
    document.getElementById('reducemessage').style.display="none";
    document.getElementById('extendmessage').style.display="none";
    document.getElementById('closemessage').style.display="none";
}
function afficherBoutonsmail(){
    document.getElementById('reducemail').style.display="block";
    document.getElementById('extendmail').style.display="block";
    document.getElementById('closemail').style.display="block";
}
function cacherBoutonsmail(){
    document.getElementById('reducemail').style.display="none";
    document.getElementById('extendmail').style.display="none";
    document.getElementById('closemail').style.display="none";
}

function displaybutton(){
    setTimeout(function (){
        document.getElementById('startgame').style.display="block";
    }, 53000); // How long do you want the delay to be (in milliseconds)? 
}
function startgame(){
    document.getElementById('intro').style.display="none";
}

// Set constraints for the video stream
var constraints = { video: { facingMode: "user" }, audio: false };
var track = null;

// Define constants
const cameraView = document.querySelector("#camera--view"),
cameraOutput = document.querySelector("#camera--output"),
cameraSensor = document.querySelector("#camera--sensor"),
cameraTrigger = document.querySelector("#camera--trigger");

// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function(stream) {
        track = stream.getTracks()[0];
        cameraView.srcObject = stream;
    })
    .catch(function(error) {
        console.error("Oops. Something is broken.", error);
    });
}

function element8(){
    document.getElementById('element8').style.display="block";
}

// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);




function autoType(elementClass, typingSpeed){
    var thhis = $(elementClass);
    thhis.css({
        "position": "relative",
        "display": "inline-block"
    });
    thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
    thhis = thhis.find(".text-js");
    var text = thhis.text().trim().split('');
    var amntOfChars = text.length;
    var newString = "";
    thhis.text("|");
    setTimeout(function(){
        thhis.css("opacity",1);
        thhis.prev().removeAttr("style");
        thhis.text("");
        for(var i = 0; i < amntOfChars; i++){
            (function(i,char){
                setTimeout(function() {        
                    newString += char;
                    thhis.text(newString);
                },i*typingSpeed);
            })(i+1,text[i]);
        }
    },1500);
}

$(document).ready(function(){
    autoType(".type-js",100);
});