$(window).on("load", displaybutton)

function bind_button(btn_name, click, cacher, afficher) {
    $("#" + btn_name).click(click)
    $("#" + btn_name).mouseout(cacher)
    $("#" + btn_name).mouseover(afficher)
}

$(function() {
    bind_button("buttonsafari", cachersafari, cacherBoutonssafari, afficherBoutonssafari)
    bind_button("buttonfacetime", cacherfacetime, cacherBoutonsfb, afficherBoutonsfb)
    bind_button("buttonmail", cachermail, cacherBoutonsmail, afficherBoutonsmail)
    bind_button("buttonmessage", cachermessage, cacherBoutonsmessage, afficherBoutonsmessage)
    
    $("#element8").click(element8)

    $(".msg").click(couleurmessage)

    $(".click-dock").click(clickDock)
})