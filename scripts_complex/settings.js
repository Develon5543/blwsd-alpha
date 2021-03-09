import {MDCRipple} from "@material/ripple";
import {MDCTopAppBar} from "@material/top-app-bar";
import {MDCDrawer} from "@material/drawer";
import {MDCList} from "@material/list";
import {MDCMenu} from "@material/menu";

var button_theme = document.getElementById("button_theme")

/*
    *********
    *Ripples*
    *********
*/
const button_ripples = [].map.call(document.querySelectorAll(".mdc-button"), function(element){
    return new MDCRipple(element);
});

const icon_button_ripples = [].map.call(document.querySelectorAll(".mdc-icon-button"), function(element){
    return new MDCRipple(element);
});

// This is annoying but needed.
var x;
for(x in icon_button_ripples){
    icon_button_ripples[x].unbounded = true;
};

const list_item_ripples = [].map.call(document.querySelectorAll(".mdc-list-item"), function(element){
    return new MDCRipple(element);
});

/*
    ********************
    *Top app bar/drawer*
    ********************
*/
const drawer = MDCDrawer.attachTo(document.querySelector(".mdc-drawer"));

const listEl = document.querySelector(".mdc-drawer .mdc-list");
const mainContentEl = document.getElementById("tab_container");

listEl.addEventListener('click', (event) => {
    drawer.open = false;
});

document.body.addEventListener('MDCDrawer:closed', () => {
    mainContentEl.querySelector('input, button').focus();
});

const topAppBar = MDCTopAppBar.attachTo(document.getElementById("top_app_bar"));
topAppBar.setScrollTarget(document.getElementById("tab_container"))
topAppBar.listen("MDCTopAppBar:nav",()=>{
    // play_sound("tap")
    drawer.open = !drawer.open
});

var drawer_list = new MDCList(document.getElementById("nav_list"))

/*
    *******
    *Other*
    *******
*/

const menu = new MDCMenu(document.querySelector(".mdc-menu"));
button_theme.addEventListener("click", function(){
    play_sound("button-press")
    menu.open = true
})
