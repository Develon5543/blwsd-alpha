import {MDCRipple} from "@material/ripple";
import {MDCTopAppBar} from "@material/top-app-bar";

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

/*
    *************
    *Top app bar*
    *************
*/
const topAppBar = new MDCTopAppBar(document.querySelector(".mdc-top-app-bar"));
