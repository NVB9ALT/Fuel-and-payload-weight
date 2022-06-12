ui.notification.show("Note that this addon is still in development. As such, it might not work and it might also break things.")
setTimeout(() => {ui.notification.show("Weight calculations assume that fighter jets will be carrying drop tanks.")}, 1000);
//ui
let weightpanel = document.createElement("div");
weightpanel.innerHTML = '<ul class="geofs-list geofs-toggle-panel geofs-autoland-list geofs-preferences" data-noblur="true" data-onshow="{geofs.initializePreferencesPanel()}" data-onhide="{geofs.savePreferencesPanel()}"><style>#MainDIV {position: absolute;left: 0px;top: 0px;background-color: white;border: 5px solid #000000;text-align: center;padding: 0px 10px 10px 10px;}#DIVtitle {color: black;font-family: monospace;font-weight: bold;font-size: 20px;}p {color: black;font-family: monospace;font-weight: bold;}.button {display: inline-block;padding: 3px 24px;font-size: 15px;cursor: pointer;text-align: center;text-decoration: none;outline: none;color: black;background-color: #ffc107;border: none;border-radius: 1px;box-shadow: 0 0px #999;}.button2 {display: inline-block}.button:hover {background-color: #536dfe}.button:active {opacity: 0.6;}.button3 {display: inline-block;padding: 3px 24px;font-size: 15px;cursor: pointer;text-align: center;text-decoration: none;outline: none;color: #fff;background-color: #536dfe;border: none;border-radius: 1px;box-shadow: 0 0px #999;}.button4 {display: inline-block;padding: 3px 24px;font-size: 15px;cursor: pointer;text-align: center;text-decoration: none;outline: none;color: #fff;background-color: red;border: none;border-radius: 1px;box-shadow: 0 0px #999;}</style><div id="MainDIV"><p id="DIVtitle">Weight Controls</p><button onclick="setMinFuel()" class="button", id="minFuel">Set Minimum Weight</button><button onclick="setMidFuel()" class="button", id="midFuel">Set Medium Weight</button><button onclick="setMaxFuel()" class="button", id="maxFuel">Set Maximum Weight</button></div></ul>'

let sidePanel = document.getElementsByClassName("geofs-ui-left")[0]
document.getElementsByClassName("geofs-ui-left")[0].appendChild(weightpanel)

// Toggle Button Code
let buttonDiv = document.createElement("div");
buttonDiv.innerHTML = '<button class="mdl-button mdl-js-button geofs-f-standard-ui geofs-mediumScreenOnly" data-toggle-panel=".geofs-autoland-list" data-tooltip-classname="mdl-tooltip--top" id="landButton" tabindex="0" data-upgraded=",MaterialButton">Weight</button>'
document.body.appendChild(buttonDiv);
document.getElementsByClassName("geofs-ui-bottom")[0].appendChild(buttonDiv);
let element = document.getElementById("landButton");
document.getElementsByClassName("geofs-ui-bottom")[0].insertBefore(element, buttonDiv);

//code

//currently this will only be for the F-16 (for testing purposes), will expand it to other fighter jets when done (if i have time lol)
//if i'm keeping my school Chromebook over the summer i'll expand it to all aircraft aside from helis lol

function setMinFuel() {
   if (geofs.aircraft.instance.id == 7) {
	   geofs.aircraft.instance.definition.mass = 9000
	}
	if (geofs.aircraft.instance.id == 18) {
	   geofs.aircraft.instance.defintion.mass = 19500
	}
	if (geofs.aircraft.instance.id == 2581) {
	   geofs.aircraft.instance.definition.mass = 20000
	}
   if (geofs.aircraft.instance.id == 2857) {
	   geofs.aircraft.instance.definition.mass = 25000
	}
	if (geofs.aircraft.instance.id == 3591) {
	   geofs.aircraft.instance.definition.mass = 20000
	}
   if (geofs.aircraft.instance.id == 3617) {
	   geofs.aircraft.instance.defintion.mass = 13800
	}
}
function setMidFuel() {
   if (geofs.aircraft.instance.id == 7) {
	   geofs.aircraft.instance.definition.mass = 12000
	}
	if (geofs.aircraft.instance.id == 18) {
	   geofs.aircraft.instance.definition.mass = 26500
	}
	if (geofs.aircraft.instance.id == 2581) {
	   geofs.aircraft.instance.definition.mass = 26000
	}
   if (geofs.aircraft.instance.id == 2857) {
	   geofs.aircraft.instance.definition.mass = 31500
	}
   if (geofs.aircraft.instance.id == 3591) {
	   geofs.aircraft.instance.definition.mass = 25000
	}
   if (geofs.aircraft.instance.id == 3617) {
	   geofs.aircraft.instance.definition.mass = 15000
	}
}
function setMaxFuel() {
   if (geofs.aircraft.instance.id == 7) {
	   geofs.aircraft.instance.definition.mass = 18000
	}
	if (geofs.aircraft.instance.id == 18) {
	   geofs.aircraft.instance.definition.mass = 76000
	}
	if (geofs.aircraft.instance.id == 2581) {
	   geofs.aircraft.instance.definition.mass = 33700
	}
   if (geofs.aircraft.instance.id == 2857) {
	   geofs.aircraft.instance.definition.mass = 38000
	}
   if (geofs.aircraft.instance.id == 3591) {
	   geofs.aircraft.instance.definition.mass = 30000
	}
   if (geofs.aircraft.instance.id == 3617) {
	   geofs.aircraft.instance.definition.mass = 17000
	}
}
