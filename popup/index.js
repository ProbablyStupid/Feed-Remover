/**
 * Note about this file:
 * The structure may be horrible and a little bit bad to understand.
 * 
 * The goal is to update the buttons' colors and also changing the 
 * entry in chrome.storage.
 */

console.log("index.js script!");

// Step 1: load settings from browser storage

/**
 * This is the basic structure for storing the removal settings in 
 * the Chrome browser storage.
 * This JSON struct is stored under the browser storage value 'removal_settings'.
 * 
 * The names here have to name the id's of the removal divs.
 * 
 * The global removal variable should always be kept up to date by the code.
 * (That couldn't possibly cause any issues...).
 */
var removal = {
    'youtube': false,
    'youtube-shorts': false,
    'reddit': false,
    'facebook': false,
    'threads': false
};

chrome.storage.local.get('removal_settings', function e(result) {
    console.log("getting DATA!");
    removal = result;
    console.log("results!!");
    console.log(result);
    updateDOM (removal);
});

// Step 2: update HTML elements to reflect browser storage

function updateDOM (data) {

    console.log ("updating DOM!");

    function updateDiv (name, value) {
        console.log("Updating Div with name: ", name, "and value", value);
        el = document.getElementById(name);
        if (el != null) {
            button = el.getElementsByTagName('button')[0];
        } else {
            console.log("el is null -> skipping.");
        }
        // TODO -> also change the text of the buttons "Remove" -> "Removing!" (when green). (and ofc vice versa)
        if (value) {
            button.class = 'button_remove';
        } else {
            button.class = 'button';
        }
    }
    
    for (property in removal) {
        updateDiv(property.name, property.value);
        console.log(property);
    }
}

// Step 3: interactivity -> enable or disable eradication of feeds

// 3.1 get button array to process them in bulk

// This is a terrible way of getting them.
removalDivs = document.getElementsByClassName('inline');

var buttons = {};

for (div of removalDivs) {
    buttons[div.id] = div.getElementsByTagName('button')[0];
}

for (let button in buttons) {
    buttons[button].addEventListener('click', () => {
        console.log("Button: ", button, "object: ", buttons[button], " -> clicked");
        saveSingleSetting(button, !removal[button]);
        adjustButtonClass(buttons[button], removal[button]);
    });
    console.log("event listener added for button", buttons[button]);
}


// Step 4: save new settings to browser storage

function saveSingleSetting (settingsName, newSettingValue) {
    removal[settingsName] = newSettingValue;
    chrome.storage.local.set({'removal_settings': removal});
}

function adjustButtonClass (buttonObject, currentRemovalSetting) {
    if (currentRemovalSetting) {
        console.log("setting color of button object: ", buttonObject,
            "to button_remove"
        );
        buttonObject.className = "button_remove";
    } else {
        console.log("setting color of button object: ", buttonObject,
            "to button"
        );
        buttonObject.className = "button";
    }
}