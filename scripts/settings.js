var page_window = null
var button_refresh = null
var button_devtools = null
var button_minimize = null
var button_close = null
var audio_player = null
var audio_player_source = null

function page_reload(){
    play_sound("button-press")
    location.reload()
}

function page_devtools(){
    play_sound("button-press")
    page_window.showDevTools()
}

function page_minimize(){
    play_sound("button-press")
    page_window.minimize()
}

function page_close(){
    play_sound("button-press")
    page_window.close()
}

function play_sound(sound = "dialog"){
    audio_player_source.setAttribute("src", `/assets/ifs-${sound}.wav`)
    audio_player.load()
    audio_player.play()
}

function page_loaded(){
    page_window = nw.Window.get()
    button_refresh = document.getElementById("button_refresh")
    button_devtools = document.getElementById("button_devtools")
    button_minimize = document.getElementById("button_minimize")
    button_close = document.getElementById("button_close")
    audio_player = document.getElementById("audio_player")
    audio_player_source = audio_player.firstChild

    var tmp = document.createElement("script")
    tmp.setAttribute("src", "/scripts_complex/settings_compiled.js")
    tmp.setAttribute("async", "true")
    document.head.appendChild(tmp)

    button_refresh.addEventListener("click", page_reload)
    button_devtools.addEventListener("click", page_devtools)
    button_minimize.addEventListener("click", page_minimize)
    button_close.addEventListener("click", page_close)
}

window.addEventListener("DOMContentLoaded", page_loaded)
