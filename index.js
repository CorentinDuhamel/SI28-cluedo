var found_clue = new Set()

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
        $("#contenumessage" + i).hide()
    }
    
    n = $(this).attr("data-message-id")
    $('#message' + n).css("backgroundColor", "#0068e1")
    $('#contenumessage' + n).show()
}

function couleurmail(){
    for (let i = 1; i <= 10; i++) {
        $("mail" + i).css("backgroundColor", "#353f4a")
        $("#contenumail" + i).hide()
    }
    
    n = $(this).attr("data-mail-id")
    $('#mail' + n).css("backgroundColor", "#0068e1")
    $('#contenumail' + n).show()
}

function showPane(pane_name) {
    pane_list = ['mail', 'safari', 'facetime', 'message', 'photos']

    for (const pane of pane_list) {
        pane === pane_name ? $("#" + pane).show() : $("#" + pane).hide()
    }
    
    if (pane_name == 'message' || pane_name == 'mail'){
        for (let i = 1; i <= 10; i++) {
            $(pane_name + i).css("backgroundColor", "#353f4a")
            $("#contenu" + pane_name + i).hide()
        }
        
        $('#' + pane_name + '1').css("backgroundColor", "#0068e1")
        $('#contenu' + pane_name + '1').show()
    }
}

function clickDock(){
    showPane($(this).attr('id').split('-')[0])
}

function clickCacher(){
    $("#" + $(this).parent().attr('id')).hide()
}

function toggleBoutons() {
    pane_id = $(this).parent().attr('id')
    $("#reduce" + pane_id).toggle()
    $("#extend" + pane_id).toggle()
    $("#close" + pane_id).toggle()
}

function displaybutton(){
    $("#startgame").hide()
    setTimeout(function (){
        $("#startgame").show()
    }, 53000); // How long do you want the delay to be (in milliseconds)? 
}

function startgame(){
    $("#intro").hide()
}

// Set constraints for the video stream
var constraints = { video: { facingMode: "user" }, audio: false };
var track = null;

// Define constants
const cameraView = document.querySelector("#camera--view")

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
    $("#element8").show()
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


/**
 * On click on clue, register it in the indice list to progress in the story
 * The clue have to have the class "clue" and an attribute attr-clue like this:
 *      attr-clue="clue-key"
 */
function registerClue() {
    found_clue.add($(this).attr("attr-clue"))
}

/**
 * On click on stop computer, the game end, and show a specific end based on the found clues
 */
function stopCumputer() {

}