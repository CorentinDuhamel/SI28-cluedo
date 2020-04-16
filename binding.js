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

    $(".msg").click(couleurmessage)
    $("#message1").click(message1)
    $("#message2").click(message2)
    $("#message3").click(message3)
    $("#message4").click(message4)
    $("#message5").click(message5)
    $("#message6").click(message6)
    $("#message7").click(message7)
    $("#message8").click(message8)
    $("#message9").click(message9)
    $("#message10").click(message10)

    $("#buttonmessage").click(cachermessage)
    $("#buttonmessage").mouseout(cacherBoutonsmessage)
    $("#buttonmessage").mouseover(afficherBoutonsmessage)

    $("#safari-dock").click(safari)
    $("#mail-dock").click(mail)
    $("#photos-dock").click(photos)
    $("#message-dock").click(message)
    $("#facetime-dock").click(facetime)
})