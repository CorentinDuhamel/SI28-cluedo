$(window).on("load", displaybutton)

$(function() {
    $("#endgame").hide()
    $("#endgame input").hide()
    $("#lasttext").hide()

    btn_names = ["buttonsafari", "buttonfacetime", "buttonmail", "buttonmessage"]
    for(let btn_name of btn_names) {
        $("#" + btn_name).click(clickCacher)
        $("#" + btn_name).mouseout(toggleBoutons)
        $("#" + btn_name).mouseover(toggleBoutons)
    }
    
    $("#element8").click(element8)

    $(".msg").click(couleurmessage)
    
    $(".mail").click(couleurmail)

    $(".click-dock").click(clickDock)
})
