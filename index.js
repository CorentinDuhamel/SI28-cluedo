var found_clue = new Set()
var clue_list = [ "pansy_msg", "mother_msg", "venezzia_msg", "flint_msg", "durand_msg", "booking_mail", "bank_account" ]

var game_ends = [ // Structure for each end : Indices needed (list of possibility), causes, consequences
    // List of possibility logic : [ [A, B], [C, D] ] means A and B or C and D
    {
        indices: [],
        cause: "La fouille de l’ordinateur ne m’a rien appris, je dois compter sur la police",
        consequence: "Tu n’as pas trouvé d’indices sur la disparition de Rose. Tu espères la revoir un jour, mais tu n’as plus jamais eu de nouvelles d’elle.",
        key: 'a'
    },
    {
        indices: [["pansy_msg"]],
        cause: "Rose trompe Pansy avec Flint, je dois contacter Flint.",
        consequence: "Tu apprends que Millie, la fille de Rose et Flint, a emménagé chez Flint, ce qui confirme tes soupçons. Cependant, Flint nie avoir une relation avec Rose et tu n’auras plus jamais de nouvelles de ta soeur.",
        key: 'b'
    },
    {
        indices: [["mother_msg"]],
        cause: "Rose à déménagé avec Pansy et à coupé les ponts avec la famille après une énième dispute avec notre mère. Je vais essayer des les recontacter.",
        consequence: "Tu n’arriveras pas à contacter Rose, ni Pansy. Au bout d’un moment, tu te résignes et espère un jour qu’elle te recontactera d’elle même mais cela n’arrivera jamais.",
        key: 'c'
    },
    {
        indices: [["venezzia_msg"]],
        cause: "Flint a entraîné Rose en eaux troubles, je dois le dénoncer à la police",
        consequence: "Après avoir dénoncé Flint et son entreprise, ce dernier est arrêté et mis en garde à vue, et Millie est placée dans un foyer.  Mais il niera avoir jamais revu Rose. Tu n’as plus jamais eu de nouvelles de ta soeur.",
        key: 'd'
    },
    {
        indices: [["flint_msg"], ["durand_msg"]],
        cause: "Millie, ma nièce est atteinte d’une maladie rare et les traitements coûtent chers. Rose a dû arnaquer un certain M. Durand pour pouvoir les payer, mais on dirait qu’il s’agit d’une qu’il est dangereux de contrarier. Je devrais parler à la police de ce M. Durand.",
        consequence: "La police parvient tant bien que mal à remonter la trace de “M. Durand”, un mafieux haut placé. Cependant il ne donnera jamais aucune information sur le sort de Rose. Tu n’auras jamais plus de nouvelles de ta soeur.",
        key: 'e'
    },
    {
        indices: [["durand_msg", "booking_mail"]],
        cause: "Millie, ma nièce est atteinte d’une maladie rare et les traitements coûtent chers. Rose a dû arnaquer un certain M. Durand pour pouvoir les payer, puis se cacher dans l'hôtel qu’elle a réservé pour éviter les représailles. Je devrais m’y rendre pour vérifier qu’elle va bien et voir comment l’aider.",
        consequence: "Lorsque tu arrives devant l’hôtel, tu es accueilli par les sirènes des pompiers et de la police. Tu es arrivé trop tard, Rose à été retrouvée morte dans sa chambre d’hôtel. Personne n’a rien vu; ni entendu. Tu identifie le corps, ta soeur ayant utilisé un faux nom, et raconte tout l’histoire à la police.Elle parviendra tant bien que mal à remonter la trace de “M. Durand”, un mafieux haut placé, mais sa condamnation ne restera qu’un maigre réconfort.",
        key: 'f'
    },
    {
        indices: [["durand_msg", "booking_mail", "bank_account"]],
        cause: "Millie, ma nièce est atteinte d’une maladie rare et les traitements coûtent chers. Rose a dû arnaquer un certain M. Durand pour pouvoir les payer, puis se cacher dans l'hôtel qu’elle a réservé pour éviter les représailles. Mais elle ignore que M. Durand l’a retrouvée et lui a lancé un ultimatum. Je dois la prévenir immédiatement de s’enfuir, je pourrais surement la contacter via la réception de l’hôtel.",
        consequence: "Après avoir décrit ta soeur au réceptionniste, tu parviens à entrer en contact avec elle. Tu la convainc de s’enfuir, ce qu’elle fait. Elle ne te dit pas ou elle va, mais te donne des nouvelles via des numéro de téléphone jetables. Quelques semaines plus tard elle revient chez elle et explique toute l’histoire à Pansy. Il décident peu après de déménager avec Millie loin de tout danger. Millie se rétablit correctement et tu continue à prendre des nouvelles de ta soeur de temps en temps.",
        key: 'g'
    }
]

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
        $("#message" + i).css({"backgroundColor" : "#662266"});
        $("#contenumessage" + i).hide()
    }
    
    $(".msg").css({"backgroundColor" : "#353f4a"})
    n = $(this).attr("data-message-id")
    $(this).css({"backgroundColor" : "#0068e1"});
    $("#message-destinataire").text($(this).text())
    $('#contenumessage' + n).show()
}

function cacherfinder(num){
    $("#finder" + num).hide()
}

var finder_file_unlocked = false
function afficherFinder(num){
    if (num == 8 || num == 9) {
        if (!finder_file_unlocked) {
            let code_entered = prompt("Quel est le mot de passe ?")
            if (code_entered.toLowerCase() == "gorillaz")
                finder_file_unlocked = true
            else {
                alert("Mot de passe erroné.")
                return false
            }
        }
    }
    $("#finder" + num).show()
}

function couleurmail(){
    for (let i = 1; i <= 10; i++) {
        $("mail" + i).css("backgroundColor", "#353f4a")
        $(".mail").css({"backgroundColor" : "#272b2d"})
        $("#contenumail" + i).hide()
    }
    
    n = $(this).attr("data-mail-id")
    $(this).css({"backgroundColor" : "#0158d0"});
    $('#contenumail' + n).show()
}

function affichecontact(){
    if ($(this).children().hasClass("nom_contact")) {
        for (let i = 1; i <= 28; i++) {
            $("contact" + i).css("backgroundColor", "#353f4a")
            $(".contact").css({"backgroundColor" : "#535e67"})
            $("#contenucontact" + i).hide()
        }
        
        n = $(this).attr("data-contact-id")
        $(this).css({"backgroundColor" : "#0158d0"});
        $(this).css({"color" : "#ffffff"});
        $('#contenucontact' + n).show()

        $(".contact-name").text($(this).children().text())
    }
}

function affichesite(){
    for (let i = 1; i <= 22; i++) {
        $("#contenusafari" + i).hide()
    }

    n = $(this).attr("data-safari-id")
    if (n==4 && !bank_unlocked) return false
    $('#contenusafari' + n).show()
}

function cachersite(){
    for (let i = 1; i <= 22; i++) {
        $("#contenusafari" + i).hide()
    }
}

function showPane(pane_name) {
    pane_list = ['mail', 'safari', 'facetime', 'message', 'photos', 'contact', 'calendrier', 'finder']

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

var messageUnlocked = false, mailUnlocked = false

function clickDock(){
    switch ($(this).attr('id').split('-')[0]) {
        case "message":
            if (messageUnlocked) {
                showPane($(this).attr('id').split('-')[0])
            }
            else {
                let code = prompt("Quel est le mot de passe ?")
                if (code == "07042015" || code == "07/04/2015" || code == "07-04-2015") {
                    messageUnlocked = true;
                    showPane($(this).attr('id').split('-')[0])
                } else {
                    alert("Code erroné.")
                }
            }
            break;
        case "mail":
            if (mailUnlocked) {
                showPane($(this).attr('id').split('-')[0])
            }
            else {
                let code = prompt("Quel est le nom de votre premier animal de compagnie ?")
                if (code.toLowerCase() == "laika") {
                    mailUnlocked = true;
                    showPane($(this).attr('id').split('-')[0])
                } else {
                    alert("Accès refusé.")
                }
            }
            break;
        default:
            showPane($(this).attr('id').split('-')[0])
            break;
    }
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

// function displaybutton(){
//     $("#startgame").hide()
//     setTimeout(function (){
//         $("#startgame").show()
//     }, 53000); // How long do you want the delay to be (in milliseconds)? 
// }

function back_safari(){
    for (let i = 1; i <= 22; i++) {
        $("#contenusafari" + i).hide()
    }
}

function startgame(){
    $("#intro").hide()

    var audio = new Audio(),
    i = 0;
    var playlist = new Array('music/p1.mp3', 'music/p2.mp3', 'music/p3.mp3',
                            'music/p4.mp3', 'music/p5.mp3', 'music/p6.mp3',
                            'music/p7.mp3', 'music/p8.mp3', 'music/p9.mp3');

    audio.addEventListener('ended', function () {
        i = ++i < playlist.length ? i : 0;
        console.log(i)
        audio.volume = 0.5;
        audio.src = playlist[i];
        audio.play();
    }, true);
    audio.volume = 0.3;
    audio.loop = false;
    audio.src = playlist[0];
    audio.play();
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


function match_indices(needed_indices) {
    let rc = new Set()
    for (const prop of needed_indices) {
        let rc2 = true
        for (const arg of prop) {
            if (!found_clue.has(arg)) rc2 = false
        }
        rc.add(rc2)
    }
    return rc.has(true)
}

/**
 * On click on clue, register it in the indice list to progress in the story
 * The clue have to have the class "clue" and an attribute attr-clue like this:
 *      attr-clue="clue-key"
 */
var bank_unlocked = false
function registerClue() {
    if ($(this).attr("attr-clue") == "bank_account") {
        if (!bank_unlocked) {
            let entered_code = prompt("Quel est le mot de passe ?")
            if (entered_code.toLowerCase() == "rosetta") {
                bank_unlocked=true
                $(this).click()
            }
            else {
                alert("Mot de passe erroné.")
                return false
            }
        }
    }
    found_clue.add($(this).attr("attr-clue"))
}

/**
 * On click on stop computer, the game end, and show a specific end based on the found clues
 */
function stopCumputer() {
    let found_causes = []

    for (const game_end of game_ends) {
        if (game_end.indices.length == 0)
            found_causes.push(game_end)
        else 
            if (match_indices(game_end.indices))
                found_causes.push(game_end)
    }

    displayCauses(found_causes)
}

function displayCauses(found_causes) {
    let keys = new Set()

    for (const cause of found_causes) {
        keys.add(cause.key)
    }

    $("#endgame").show()

    autoType(".type-cause", 100)

    $("#endgame button").each(function() {
        if (keys.has($(this).attr("data-key")))
            $(this).show()
    })
}

function choosen_end(n) {
    $("#lasth1").text(game_ends[n].consequence)
    $("#endgame").hide()
    $("#lasttext").show()
    autoType(".type-last", 100)
}

var medic_file_unlocked = false
function medic_file() {
    if (medic_file_unlocked) return true

    var code_entered = prompt("Quel est le mot de passe ?")
    if (code_entered.toLowerCase() == 'la lezardiere')
        medic_file_unlocked = true
    else
        alert("Mot de passe erroné.")
    return medic_file_unlocked
}
