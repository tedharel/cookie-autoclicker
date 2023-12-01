// ==UserScript==
// @name         Balanced autoclicker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Balanced for me, that is
// @author       Some guy on the internet
// @match        https://orteil.dashnet.org/cookieclicker
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dashnet.org
// @grant        none
// ==/UserScript==
'use strict';

Game.registerMod("Balanced Autoclicker", {
    init: function() {
            Game.mods["Balanced Autoclicker"].sprintReady = true;

            document.addEventListener("keydown", function(event) {
            let key = event.keyCode;
            if (!(key == 188 || key == 190 || key == 191)) {
                return
            };

            if (key == 191) { // if "/" pressed
                console.log("disabled autoclicker");
                Game.mods["Balanced Autoclicker"].disable();
                return
            };

            if (document.querySelectorAll(':hover')[document.querySelectorAll(':hover').length-1] != document.getElementById("bigCookie")) {
                return;
            };

            if (Game.mods["Balanced Autoclicker"].active) {
                return
            }

            if (key == 188) { // if "," pressed
                console.log("sprint started");
                Game.mods["Balanced Autoclicker"].active = true;
                Game.mods["Balanced Autoclicker"].sprintReady = false;
                Game.mods["Balanced Autoclicker"].sprintTimer = setTimeout(Game.mods["Balanced Autoclicker"].sprintReady = true, 120000)
                Game.mods["Balanced Autoclicker"].fifteenCpsInterval = setInterval(Game.ClickCookie, 67);
                Game.mods["Balanced Autoclicker"].tenSecondTimer = setTimeout(function() {clearInterval(Game.mods["Balanced Autoclicker"].fifteenCpsInterval);Game.mods["Balanced Autoclicker"].thirteenCpsInterval = setInterval(Game.ClickCookie, 77)}, 10000);
                Game.mods["Balanced Autoclicker"].twentySecondTimer = setTimeout(function() {clearInterval(Game.mods["Balanced Autoclicker"].thirteenCpsInterval);Game.mods["Balanced Autoclicker"].tenCpsInterval = setInterval(Game.ClickCookie, 100)}, 20000);
            };

            if (key == 190) { // if "." pressed
                console.log("regular autoclicker started");
                Game.mods["Balanced Autoclicker"].active = true;
                Game.mods["Balanced Autoclicker"].tenCpsInterval = setInterval(Game.ClickCookie, 100);
            };
        });
    },
    disable: function() {
        clearInterval(Game.mods["Balanced Autoclicker"].fifteenCpsInterval);
        clearInterval(Game.mods["Balanced Autoclicker"].thirteenCpsInterval);
        clearInterval(Game.mods["Balanced Autoclicker"].tenCpsInterval);
        clearTimeout(Game.mods["Balanced Autoclicker"].tenSecondTimer);
        clearTimeout(Game.mods["Balanced Autoclicker"].twentySecondTimer);
        Game.mods["Balanced Autoclicker"].active = false
    }
});


/*
let autoclicker = window.autoclicker = {};

autoclicker.disable = function() {
    clearInterval(autoclicker.fifteenCpsInterval);
    clearInterval(autoclicker.thirteenCpsInterval);
    clearInterval(autoclicker.tenCpsInterval);
    clearTimeout(autoclicker.tenSecondTimer);
    clearTimeout(autoclicker.twentySecondTimer);
    autoclicker.active = false
};

document.addEventListener("wheel", event => {
    const delta = Math.sign(event.deltaY);
    if (delta == 1) {
        console.log("disabled autoclicker");
        autoclicker.disable();
    };

    if (document.querySelectorAll(':hover')[document.querySelectorAll(':hover').length-1] != document.getElementById("bigCookie")) {
        return;
    };

    if (delta == -1) {
        console.log("hurrah ig");
        if (autoclicker.active) {
            return;
        };
        autoclicker.active = true;
        autoclicker.fifteenCpsInterval = setInterval(Game.ClickCookie, 67);
        autoclicker.tenSecondTimer = setTimeout(function() {clearInterval(autoclicker.fifteenCpsInterval);autoclicker.thirteenCpsInterval = setInterval(Game.ClickCookie, 77)}, 10000);
        autoclicker.twentySecondTimer = setTimeout(function() {clearInterval(autoclicker.thirteenCpsInterval);autoclicker.tenCpsInterval = setInterval(Game.ClickCookie, 100)}, 20000);
    };
});
*/