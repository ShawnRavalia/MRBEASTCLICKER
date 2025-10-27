let Cash = 0;
let Cash_Per_Click = 1;
let CLICKUPG1_COST = 10;
let CLICKUPG2_COST = 250;
let Views = 0;
let VIEWSUPG1_COST = 100;
let VIEWSUPG2_COST = 500;
let StatsEnabled = false;
let PulseDisabled = false;
let UPG2_AVALIBLE = false;
let spacePressed = false;
let Playbuttons = 0;
let rebirthcount = 0;
let rebirthCost = 750; // initial rebirth cost
let rebirthMultiplier = 1.5; // cost multiplies by 2 each rebirth
const Cash_Per_Click_Base = 1;  // or your default base value
const Views_Base = 0;           // or your default base value

const CashDisplay = document.getElementById('Cash');
const CPC = document.getElementById('CPC');
const CPS = document.getElementById('CPS');
const UPG1COSTDISPLAY = document.getElementById('UPG1');
const UPG2COSTDISPLAY = document.getElementById('UPG2');
const VIEWUPG1COSTDISPLAY = document.getElementById('VIEWUPG1');
const VIEWUPG2COSTDISPLAY = document.getElementById('VIEWUPG2')
const shopBtn = document.getElementById('shopBtn');
const sideMenu = document.getElementById('sideMenu');
const closeBtn = document.getElementById('closeBtn');
const settingsBtn = document.getElementById('settingsBtn');
const settingsMenu = document.getElementById('settingsMenu');
const closeSettingsBtn = document.getElementById('closeSettingsBtn');
const TogglePulse = document.getElementById('togglePulseBtn');
const ToggleStats = document.getElementById('toggleStatsBtn');
const rebirthBtn = document.getElementById('rebirthBtn');
const rebirthMenu = document.getElementById('rebirthMenu');
const confirmRebirthBtn = document.getElementById('confirmRebirthBtn');
const closeRebirthBtn = document.getElementById('closeRebirthBtn');
const playbuttonsDisplay = document.getElementById('Playbuttons');
const rebirthCostDisplay = document.getElementById('RebirthCost');

shopBtn.addEventListener('click', () => {
    sideMenu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('open');
});
function updateDisplay() {
    CashDisplay.textContent = Cash;
    UPG1COSTDISPLAY.textContent = CLICKUPG1_COST;
    VIEWUPG1COSTDISPLAY.textContent = VIEWSUPG1_COST;
    UPG2COSTDISPLAY.textContent = CLICKUPG2_COST;
    VIEWUPG2COSTDISPLAY.textContent = VIEWSUPG2_COST;
    if (rebirthcount >= 1) {
        updateRebirthDisplay();
    }
    if (StatsEnabled === true) {
        CPC.textContent = Cash_Per_Click;
        CPS.textContent = Views;
    }
}
let permUpgrades = {
    clickPower: { owned: false, cost: 5 },
    passiveIncome: { owned: false, cost: 10 }
};

// DOM elements
const permUpgradesBtn = document.getElementById('permUpgradesBtn');
const permUpgradesMenu = document.getElementById('permUpgradesMenu');
const closePermUpgradesBtn = document.getElementById('closePermUpgradesBtn');
const permPlaybuttonsDisplay = document.getElementById('permPlaybuttons');

const buyPermUpgrade1Btn = document.getElementById('buyPermUpgrade1');
const buyPermUpgrade2Btn = document.getElementById('buyPermUpgrade2');

const permUpgrade1CostDisplay = document.getElementById('permUpgrade1Cost');
const permUpgrade2CostDisplay = document.getElementById('permUpgrade2Cost');

const permUpgrade1BoughtLabel = document.getElementById('permUpgrade1Bought');
const permUpgrade2BoughtLabel = document.getElementById('permUpgrade2Bought');

function updatePermUpgradesDisplay() {
    permPlaybuttonsDisplay.textContent = Playbuttons;

    permUpgrade1CostDisplay.textContent = permUpgrades.clickPower.cost;
    permUpgrade2CostDisplay.textContent = permUpgrades.passiveIncome.cost;

    if (permUpgrades.clickPower.owned) {
        buyPermUpgrade1Btn.style.display = 'none';
        permUpgrade1BoughtLabel.style.display = 'inline';
    } else {
        buyPermUpgrade1Btn.style.display = 'inline';
        permUpgrade1BoughtLabel.style.display = 'none';
    }

    if (permUpgrades.passiveIncome.owned) {
        buyPermUpgrade2Btn.style.display = 'none';
        permUpgrade2BoughtLabel.style.display = 'inline';
    } else {
        buyPermUpgrade2Btn.style.display = 'inline';
        permUpgrade2BoughtLabel.style.display = 'none';
    }
}

// Open permanent upgrades menu
permUpgradesBtn.addEventListener('click', () => {
    updatePermUpgradesDisplay();
    permUpgradesMenu.classList.add('open');
});

// Close button
closePermUpgradesBtn.addEventListener('click', () => {
    permUpgradesMenu.classList.remove('open');
});

// Buy click power upgrade
buyPermUpgrade1Btn.addEventListener('click', () => {
    if (!permUpgrades.clickPower.owned && Playbuttons >= permUpgrades.clickPower.cost) {
        Playbuttons -= permUpgrades.clickPower.cost;
        permUpgrades.clickPower.owned = true;

        // Apply upgrade effect: Increase base Cash per Click by 1 permanently
        Cash_Per_Click += 1;

        updateDisplay();
        updatePermUpgradesDisplay();
    } else {
        alert('Not enough Playbuttons or already owned!');
    }
});

// Buy passive income upgrade
buyPermUpgrade2Btn.addEventListener('click', () => {
    if (!permUpgrades.passiveIncome.owned && Playbuttons >= permUpgrades.passiveIncome.cost) {
        Playbuttons -= permUpgrades.passiveIncome.cost;
        permUpgrades.passiveIncome.owned = true;

        // Apply upgrade effect: Increase passive Views income by 1 permanently
        Views += 1;

        updateDisplay();
        updatePermUpgradesDisplay();
    } else {
        alert('Not enough Playbuttons or already owned!');
    }
});

// Update playbuttons and rebirth cost display
function updateRebirthDisplay() {
    playbuttonsDisplay.textContent = Playbuttons;
    rebirthCostDisplay.textContent = rebirthCost;
}
function clickBeast() {
    const beastImg = document.getElementById('MrBeast');
    if (!PulseDisabled) {
        beastImg.classList.remove('pulse');
        void beastImg.offsetWidth;
        beastImg.classList.add('pulse');
    }
    Cash += Cash_Per_Click;
    updateDisplay();
}
// Show rebirth menu when clicking rebirth button
rebirthBtn.addEventListener('click', () => {
    updateRebirthDisplay();
    rebirthMenu.classList.add('open');
});

// Close rebirth menu button
closeRebirthBtn.addEventListener('click', () => {
    rebirthMenu.classList.remove('open');
});
confirmRebirthBtn.addEventListener('click', () => {
    if (Cash >= rebirthCost) {
        // Perform rebirth

        Cash = 0;

        // Reset base upgrades except permanent upgrades:
        // Cash_Per_Click = 1 + permUpgrades clickPower bonus
        Cash_Per_Click = 1 + (permUpgrades.clickPower.owned ? 1 : 0);

        // Views reset to zero plus passiveIncome bonus
        Views = 0 + (permUpgrades.passiveIncome.owned ? 1 : 0);
        rebirthcount += 1;
        // Increase playbuttons and rebirth cost
        Playbuttons += 1;
        rebirthCost = Math.round(rebirthCost * rebirthMultiplier);
        CLICKUPG1_COST = 10;
        CLICKUPG2_COST = 250;
        VIEWSUPG1_COST = 100;
        VIEWSUPG2_COST = 500;

        // Hide shop upgrades resets (optional)
        document.getElementById('upgrade3').style.display = 'none';
        document.getElementById('upgrade4').style.display = 'none';

        updateDisplay();
        updateRebirthDisplay();

        alert('You rebirthed! You earned 1 Playbutton.');

        // Close the menu
        rebirthMenu.classList.remove('open');
    } else {
        alert(`You need ${rebirthCost} Cash to rebirth!`);
    }
});
function BUYUPG1() {
    if (Cash >= CLICKUPG1_COST) {
        Cash -= CLICKUPG1_COST;
        Cash_Per_Click += 1;
        CLICKUPG1_COST *= 1.75;
        CLICKUPG1_COST = Math.round(CLICKUPG1_COST)
        const upgrade3 = document.getElementById('upgrade3');
        upgrade3.style.display = 'list-item';  // Or 'block'
        updateDisplay()
    } else {
        alert("YOU AIN'T GOT NO CASH")
    }
}
function BUYUPG2() {
    if (Cash >= CLICKUPG2_COST) {
        Cash -= CLICKUPG2_COST;
        Cash_Per_Click += 5;
        CLICKUPG2_COST *= 1.50;
        CLICKUPG2_COST = Math.round(CLICKUPG2_COST);
        updateDisplay();
    } else {
        alert("YOU STILL BROKE")
    }
}
function VIEWUPG1() {
    if (Cash >= VIEWSUPG1_COST) {
        Cash -= VIEWSUPG1_COST;
        Views += 1;
        VIEWSUPG1_COST *= 1.80
        VIEWSUPG1_COST = Math.round(VIEWSUPG1_COST);
        const upgrade4 = document.getElementById('upgrade4');
        upgrade4.style.display = 'list-item';
        setInterval(function () {
            Cash += Views;
            updateDisplay();
        }, 1000);
        updateDisplay();
    } else {
        alert("YOU AIN'T GOT NO CASH")
    }
}
function VIEWUPG2() {
    if (Cash >= VIEWSUPG2_COST) {
        Cash -= VIEWSUPG2_COST;
        Views += 5;
        VIEWSUPG2_COST *= 2.25
        VIEWSUPG2_COST = Math.round(VIEWSUPG2_COST)
        setInterval(function () {
            Cash += Views;
            updateDisplay();
        }, 1000);
        updateDisplay();
    } else {
        alert("NO CASH FOOL")
    }
}
// Opens the settings menu
settingsBtn.addEventListener('click', () => {
    settingsMenu.classList.add('open');
});

// Closes the settings menu
closeSettingsBtn.addEventListener('click', () => {
    settingsMenu.classList.remove('open');
});

TogglePulse.addEventListener('click', () => {
    PulseDisabled = !PulseDisabled; // toggle true/false

    if (PulseDisabled) {
        TogglePulse.textContent = 'Enable Pulse';
    } else {
        TogglePulse.textContent = 'Disable Pulse';
    }
})
ToggleStats.addEventListener('click', () => {
    StatsEnabled = !StatsEnabled;
    const CPC = document.querySelector('.Info');
    const CPS = document.querySelector('.Info2');
    if (StatsEnabled) {
        ToggleStats.textContent = 'Disable Stats';
        CPC.classList.remove('hidden');
        CPS.classList.remove('hidden');
    } else {
        ToggleStats.textContent = 'Enable Stats';
        CPC.classList.add('hidden');
        CPS.classList.add('hidden');
    }
    updateDisplay();
});
document.body.onkeydown = function (e) {
    if (e.code === 'Space' && !spacePressed) {
        spacePressed = true;
        clickBeast();
    }
};

document.body.onkeyup = function (e) {
    if (e.code === 'Space') {
        spacePressed = false;
    }
};
// Generate fire emojis randomly
function createFire() {
    const fire = document.createElement('div');
    fire.classList.add('fire');
    fire.textContent = '🔥';

    // Random horizontal position and size
    fire.style.left = Math.random() * 80 + 'vw';
    fire.style.fontSize = (Math.random() * 4 + 4) + 'rem';
    fire.style.animationDuration = (Math.random() * 3 + 3) + 's';

    document.body.appendChild(fire);

    // Remove after animation
    setTimeout(() => {
        fire.remove();
    }, 6000);
}

// Create fire every 200ms
setInterval(createFire, 200);

const saveBtn = document.getElementById('saveBtn');
const loadBtn = document.getElementById('loadBtn');
const loadFileInput = document.getElementById('loadFileInput');
saveBtn.addEventListener('click', () => {
    const gameState = {
        Cash,
        Cash_Per_Click,
        CLICKUPG1_COST,
        CLICKUPG2_COST,
        Views,
        VIEWSUPG1_COST,
        VIEWSUPG2_COST,
        StatsEnabled,
        PulseDisabled,
        permUpgrades,
        Playbuttons,
        rebirthCost,
    };

    const dataStr = JSON.stringify(gameState, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'mrbeast_clicker_save.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

let passiveInterval = null; // Store interval ID globally


loadFileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (!file) {
        alert('No file selected.');
        return;
    }
    const reader = new FileReader();

    reader.onload = function (e) {
        try {
            const text = e.target.result;
            const gameState = JSON.parse(text);

            // Assign loaded values
            Cash = gameState.Cash ?? 0;
            Cash_Per_Click = gameState.Cash_Per_Click ?? 1;
            CLICKUPG1_COST = gameState.CLICKUPG1_COST ?? 10;
            CLICKUPG2_COST = gameState.CLICKUPG2_COST ?? 250;
            Views = gameState.Views ?? 0;
            VIEWSUPG1_COST = gameState.VIEWSUPG1_COST ?? 100;
            VIEWSUPG2_COST = gameState.VIEWSUPG2_COST ?? 500;
            StatsEnabled = gameState.StatsEnabled ?? false;
            PulseDisabled = gameState.PulseDisabled ?? false;
            Playbuttons = gameState.Playbuttons ?? 0;
            rebirthCost = gameState.rebirthCost ?? 1000;
            permUpgrades = gameState.permUpgrades ?? {
                clickPower: { owned: false, cost: 5 },
                passiveIncome: { owned: false, cost: 10 }
            };
            Cash_Per_Click = Cash_Per_Click_Base + (permUpgrades.clickPower.owned ? 1 : 0);
            Views = Views_Base + (permUpgrades.passiveIncome.owned ? 1 : 0);
            

            updateDisplay();
            updateRebirthDisplay();
            updatePermUpgradesDisplay();

            // Show/hide upgrades based on loaded state
            if (Cash_Per_Click >= 2) {
                document.getElementById('upgrade3').style.display = 'list-item';
            } else {
                document.getElementById('upgrade3').style.display = 'none';
            }

            if (Views >= 1) {
                document.getElementById('upgrade4').style.display = 'list-item';
            } else {
                document.getElementById('upgrade4').style.display = 'none';
            }
            if (passiveInterval !== null) {
                clearInterval(passiveInterval);
                passiveInterval = null;
            }

            // Setup interval for views income
            if (Views > 0) {
                setInterval(() => {
                    Cash += Views;
                    updateDisplay();
                }, 1000);
            }

            alert('Save loaded from file!');
        } catch (error) {
            alert('Invalid save file.');
            console.error(error);
        }
    };

    reader.readAsText(file);
});