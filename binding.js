$(window).on("load", displaybutton)

$(function() {
    $("#buttonsafari").click(cachersafari)
    $("#buttonsafari").mouseout(cacherBoutonssafari)
    $("#buttonsafari").mouseover(afficherBoutonssafari)
    
    $("#element8").click(element8)

    $("#buttonfacetime").click(cacherfacetime)
    $("#buttonfacetime").mouseout(cacherBoutonsfb)
    $("#buttonfacetime").mouseover(afficherBoutonsfb)

    $("#buttonmail").click(cachermail)
    $("#buttonmail").mouseout(cacherBoutonsmail)
    $("#buttonmail").mouseover(afficherBoutonsmail)
})