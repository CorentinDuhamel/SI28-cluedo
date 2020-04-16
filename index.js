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
    for (let i = 1; i <= 10; i++) {
        $("message" + i).css("backgroundColor", "#353f4a")
        $("#contenumessage" + i).css("diplay", "none")
    }
    
    n = $(this).attr("data-message-id")
    $('#message' + n).css("backgroundColor", "#0068e1")
    $('#contenumessage' + n).css("display", "block")
}

function showPane(pane_name) {
    pane_list = ['mail', 'safari', 'facetime', 'message', 'photos']

    for (const pane of pane_list) {
        pane === pane_name ? $("#" + pane).show() : $("#" + pane).hide()
    }
}

function mail(){
    showPane("mail")
}

function photos(){
    showPane("photos")
}

function safari(){
    showPane("safari")
}

function facetime(){
    showPane("facetime")
}

function message(){
    showPane("message")
}


function cachermail(){
    document.getElementById('mail').style.display="none";
}
function cacherfacetime(){
    document.getElementById('facetime').style.display="none";
}
function cachersafari(){
    document.getElementById('safari').style.display="none";
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
    $("#startgame").hide()
    setTimeout(function (){
        $("#startgame").show()
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
    var space = 0;
    thhis.text("|");
    setTimeout(function(){
        thhis.css("opacity",1);
        thhis.prev().removeAttr("style");
        thhis.text("");
        for(var i = 0; i < amntOfChars; i++){
            (function(i,char){
                if (char === ' ')
                    space++
                setTimeout(function() {        
                    newString += char;
                    thhis.text(newString);
                },(i-space)*typingSpeed);
            })(i+1,text[i]);
        }
    },1500);
}

$(document).ready(function(){
    autoType(".type-js",100);
});