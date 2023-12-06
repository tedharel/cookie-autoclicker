'use strict';
/*
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
*/


let autoclicker = window.autoclicker = {};
autoclicker.sprintReady = true

autoclicker.disable = function() {
    clearInterval(autoclicker.fifteenCpsInterval);
    clearInterval(autoclicker.thirteenCpsInterval);
    clearInterval(autoclicker.tenCpsInterval);
    clearTimeout(autoclicker.tenSecondTimer);
    clearTimeout(autoclicker.twentySecondTimer);
    autoclicker.active = false
};

document.addEventListener("keydown", function(event) {
    let key = event.keyCode;

    if (key == 191 || autoclicker.active && (key == 188 || 190)) { // if "/" pressed, or either "," or "." while active 
        autoclicker.disable();
        return
    };

    if (document.querySelectorAll(':hover')[document.querySelectorAll(':hover').length-1] != document.getElementById("bigCookie")) {
        return;
    };
	
    if (autoclicker.active) {
        return;
    };

	if (key == 190) { // if "." pressed
        autoclicker.active = true;
        autoclicker.tenCpsInterval = setInterval(Game.ClickCookie, 100);
        return
	};

	if (!autoclicker.sprintReady) {
		Game.Popup("Sprint is not ready yet", Game.mouseX, Game.mouseY);
        autoclicker.active = true;
        autoclicker.tenCpsInterval = setInterval(Game.ClickCookie, 100);
		return
	}

    if (key == 188) { // if "," pressed
        autoclicker.active = true;
		autoclicker.sprintReady = false;
        autoclicker.sprintTimer = setTimeout(function() {autoclicker.sprintReady= true;Game.Notify("Sprint is ready!", 'Press "," to activate', ["12", "0"], 3, true)}, 120000)
        autoclicker.fifteenCpsInterval = setInterval(Game.ClickCookie, 67);
        autoclicker.tenSecondTimer = setTimeout(function() {clearInterval(autoclicker.fifteenCpsInterval);autoclicker.thirteenCpsInterval = setInterval(Game.ClickCookie, 77)}, 10000);
        autoclicker.twentySecondTimer = setTimeout(function() {clearInterval(autoclicker.thirteenCpsInterval);autoclicker.tenCpsInterval = setInterval(Game.ClickCookie, 100)}, 20000);
    };
});
