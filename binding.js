$(window).on("load", displaybutton)

$(function() {
    btn_names = ["buttonsafari", "buttonfacetime", "buttonmail", "buttonmessage"]
    for(let btn_name of btn_names) {
        $("#" + btn_name).click(clickCacher)
        $("#" + btn_name).mouseout(cacherBoutons)
        $("#" + btn_name).mouseover(afficherBoutons)
    }
    
    $("#element8").click(element8)

    $(".msg").click(couleurmessage)

    $(".click-dock").click(clickDock)
})