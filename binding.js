$(window).on("load", displaybutton)

$(function() {
    $("#endgame").hide()
    $("#endgame input").hide()
    $("#lasttext").hide()
    $(".off-menu").hide()
    $(".shutdown").hide()

    btn_names = ["buttonsafari", "buttonfacetime", "buttonmail", "buttonmessage"]
    for(let btn_name of btn_names) {
        $("#" + btn_name).click(clickCacher)
        $("#" + btn_name).mouseout(toggleBoutons)
        $("#" + btn_name).mouseover(toggleBoutons)
    }
    
    $("#element8").click(element8)

    $(".msg").click(couleurmessage)
    
    $(".mail").click(couleurmail)
    
    $(".contact").click(affichecontact)
    
    $(".safari").click(affichesite)

    $(".click-dock").click(clickDock)

    $(".off-menu-click").click(function() { $(".off-menu").toggle() })
    $(".stop").click(function() {
        $(".off-menu").toggle()
        $(".shutdown").toggle()
    })

    $(".annuler").click(function() { $(".shutdown").toggle() })
    $(".eteindre").click(function() {
        $(".shutdown").toggle()
        stopCumputer()
    })
})
