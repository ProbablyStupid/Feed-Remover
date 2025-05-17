// TODO: implement button logic!

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
    updateDOM (removal);
});

// Step 2: update HTML elements to reflect browser storage

function updateDOM (data) {

    console.log ("updating DOM!");

    function updateDiv (name, value) {
        console.log("UPDATE DIV!");
        el = document.getElementById(name);
        button = el.getElementByTagName('button');
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
removalDivs = document.getElementsById('inline');

var buttons = {};

for (div of removalDivs) {
    buttons[div.id] = div.getElementByTagName('button');
}

for (button in buttons) {
    buttons[button].addEventListener('click', () => {
        saveSingleSetting();
    });
}


// Step 4: save new settings to browser storage

function saveSingleSetting (settingsName, newSettingValue) {
    // TODO: implement
}