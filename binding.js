$(window).on("load", displaybutton)

function bind_button(btn_name, cacher, afficher) {
    $("#" + btn_name).click(clickCacher)
    $("#" + btn_name).mouseout(cacher)
    $("#" + btn_name).mouseover(afficher)
}

$(function() {
    bind_button("buttonsafari", cacherBoutonssafari, afficherBoutonssafari)
    bind_button("buttonfacetime", cacherBoutonsfb, afficherBoutonsfb)
    bind_button("buttonmail", cacherBoutonsmail, afficherBoutonsmail)
    bind_button("buttonmessage", cacherBoutonsmessage, afficherBoutonsmessage)
    
    $("#element8").click(element8)

    $(".msg").click(couleurmessage)

    $(".click-dock").click(clickDock)
})