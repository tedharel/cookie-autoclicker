"use strict";

Game.registerMod("cookie autoclicker", {
	init: function() {
		Game.mods["cookie autoclicker"].sprintReady = true;
		Game.mods["cookie autoclicker"].active = false;
		
        	document.addEventListener("keydown", function(event) {
			const key = event.keyCode;
			
			if (!(key == 188 || key == 190 || key == 191)) {
				return
			};
	
			if (key == 191 || Game.mods["cookie autoclicker"].active) { // if "/" pressed, or either "," or "." while active
				Game.mods["cookie autoclicker"].disable();
				return
			};
			
			if (document.querySelectorAll(':hover')[document.querySelectorAll(':hover').length-1] != document.getElementById("bigCookie")) {	
				return;
			};
	
	            	if (Game.mods["cookie autoclicker"].active) {
	                	return
	            	};
	
	            	if (key == 190) { // if "." pressed
				Game.mods["cookie autoclicker"].startNormal();
				return
	            	};
	
			if (!Game.mods["cookie autoclicker"].sprintReady) {
				Game.Popup("Sprint is not ready yet", Game.mouseX, Game.mouseY);
				Game.mods["cookie autoclicker"].startNormal();
				return
			};
	
	            	if (key == 188) { // if "," pressed
				Game.mods["cookie autoclicker"].startSprint();
	            	};
		});
	},
	
	startSprint: function() {
		Game.mods["cookie autoclicker"].active = true;
	        Game.mods["cookie autoclicker"].sprintReady = false;
	        Game.mods["cookie autoclicker"].sprintTimer = setTimeout(function() {Game.mods["cookie autoclicker"].sprintReady = true;Game.Notify("Sprint is ready!", 'Press "," to activate', ["12", "0"], 3, true)}, 120000);
	        Game.mods["cookie autoclicker"].fifteenCpsInterval = setInterval(Game.ClickCookie, 67);
	        Game.mods["cookie autoclicker"].tenSecondTimer = setTimeout(function() {clearInterval(Game.mods["cookie autoclicker"].fifteenCpsInterval);Game.mods["cookie autoclicker"].thirteenCpsInterval = setInterval(Game.ClickCookie, 77)}, 10000);
	        Game.mods["cookie autoclicker"].twentySecondTimer = setTimeout(function() {clearInterval(Game.mods["cookie autoclicker"].thirteenCpsInterval);Game.mods["cookie autoclicker"].tenCpsInterval = setInterval(Game.ClickCookie, 100)}, 20000);
	},

	startNormal: function() {
	        Game.mods["cookie autoclicker"].active = true;
	        Game.mods["cookie autoclicker"].tenCpsInterval = setInterval(Game.ClickCookie, 100);
	},
	
	disable: function() {
	        clearInterval(Game.mods["cookie autoclicker"].fifteenCpsInterval);
	        clearInterval(Game.mods["cookie autoclicker"].thirteenCpsInterval);
	        clearInterval(Game.mods["cookie autoclicker"].tenCpsInterval);
	        clearTimeout(Game.mods["cookie autoclicker"].tenSecondTimer);
	        clearTimeout(Game.mods["cookie autoclicker"].twentySecondTimer);
	        Game.mods["cookie autoclicker"].active = false
	}
});
