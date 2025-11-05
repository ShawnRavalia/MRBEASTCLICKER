let Cash = 0;
const date = new Date();
console.log(date.getDate());
let achievements = [
    { id: "firstClick", name: "First Steps", desc: "You clicked on the burning beast for the first time", unlocked: false },
    { id: "clicks100", name: "100 CLICKS", desc: "You clicked the burning beast 100 times", unlocked: false },
    { id: "clicks1000", name: "Advanced Clicker", desc: "You clicked the burning beast 1000 times", unlocked: false },
    { id: "clicks10000", name: "Beast Clicker", desc: "You clicked the burning beast 10000 times", unlocked: false },
    { id: "cpc_achieve_1", name: "Feastable Fan", desc: "Have A Total CPC Of 10", unlocked: false },
    { id: "cps_achieve_1", name: "View Botting", desc: "Have A Total CPS Of 10", unlocked: false },
    { id: "DCL", name: "Dark Chocolate Lover", desc: "Brought 5 Feastables (Dark Chocolate)", unlocked: false },
    { id: "WKLYUPL", name: "Weekly Uploader", desc: "Uploaded 7 Video's", unlocked: false },
    { id: "BPB", name: "Bronze Playbutton", desc: "Buy 5K Subscribers", unlocked: false },
    { id: "TBT", name: "Begun Construction", desc: "Started work on the twin beast towers", unlocked: false },
    { id: "hesback", name: "He always comes back", desc: "You can't get rid of him", unlocked: false },
    { id: "Rebirth", name: "Second Coming of christ", desc: "Rebirthed for the first time", unlocked: false },
    { id: "BSTMAS", name: "Merry Beastmas", desc: "Play the game on the 25th (Of any month)", unlocked: false },
    { id: "Diamond Status", name: "Made It Diamond", desc: "You have gotten your first diamond play button", unlocked: false }
];
let clickcounter = 0;
let Cash_Per_Click = 1;
let CLICKUPG1_COST = 10;
let CLICKUPG2_COST = 250;
let Views = 0;
let VIEWSUPG1_COST = 100;
let VIEWSUPG2_COST = 500;
let CLICKUPG3_COST = 1000;
let VIEWSUPG3_COST = 1500;
let VIEWSUPG3_BEGUN = 0;
let StatsEnabled = false;
let PulseDisabled = false;
let UPG2_AVALIBLE = false;
let spacePressed = false;
let UPG1_BROUGHT = 0;
let UPG2_BROUGHT = 0;
let UPG3_BROUGHT = 0;
let UPG4_BROUGHT = 0;
let UPG5_BROUGHT = 0;
let UPG6_BROUGHT = 0;
let Playbuttons = 0;
let DiamondPlayButtons = 0;
let DiamondPlayButtonsMultipler = 1;
let rebirthcount = 0;
let rebirthCost = 1000; // initial rebirth cost 1000
let rebirthMultiplier = 1.5; // cost multiplies by 1.5 each rebirth
let IsOn = 0;
const messages = [
    "Feastables are delicious 🍫 (100% NOT PAID PROMOTION)",
    "P Diddy is innocent",
    "That girl should of moved out of R kelly's way",
    "I'm beasting it",
    "I'm unleashing my beast",
    "Footah",
    "LOOK HYERE",
    "Appear weak when you are strong, and strong when you are weak.",
    "I will always do R. Kelly - I'm not perfect, but I'm perfectly me.",
    "I'm no angel, but I'm no monster, either",
    "Don't chase the paper, chase the list",
    "I went to say megatron, but tiktok or my phone decided to glitch",
    "SUNT💔",
    "I did it for the kids",
    "If the glove doesn't fit then you must aquit",
    "Samuel L Jackson Like a certain type of anime",
    "'You guys are milking the SUNT Meme Not ME, YOU'",
    "Khaby lame mechanism",
    "Blow Me",
    "Woman arrested for abuse & says 6,7",
    "LAST ONE TO KEEP THEIR HAND ON THE CAR WINS A FREE FOOTSIE",
    "'WOAHHHHH' - Emmanuel",
    "'That kid was a fine scholar, Hear his mama whine and holler he died for nine dollars' - Masta Ace",
    "The grammy's are racist, They dont wanna see a black sister winning",
    "JAY-Z DROPPING SOON",
    "FAR BACK LIKE SWIZZ BEATZ HAIRLINE",
    "I did not have relations with that woman",
    "Prince andrew's email to Epstien"

];


const scrollTextElem = document.getElementById('scrollText');
const CashDisplay = document.getElementById('Cash');
const CPC = document.getElementById('CPC');
const CPS = document.getElementById('CPS');
const UPG1COSTDISPLAY = document.getElementById('UPG1');
const UPG2COSTDISPLAY = document.getElementById('UPG2');
const VIEWUPG1COSTDISPLAY = document.getElementById('VIEWUPG1');
const VIEWUPG2COSTDISPLAY = document.getElementById('VIEWUPG2');
const UPG3COSTDISPLAY = document.getElementById('UPG3');
const VIEWUPG3COSTDISPLAY = document.getElementById('VIEWUPG3');
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
const DiamondPlayButtonsDisplay = document.getElementById('DiamondPlayBTNS');
const rebirthCostDisplay = document.getElementById('RebirthCost');
const achievementsBtn = document.getElementById('achievementsBtn');
const achievementsMenu = document.getElementById('achievementsMenu');
const closeAchievementsBtn = document.getElementById('closeAchievementsBtn');
const achievementsList = document.getElementById('achievementsList');
const clickSound = new Audio('Assests/Sounds/click.mp3');
const toggleMusic = document.getElementById('toggleMusic');
clickSound.volume = 0.15;

function restartScroll() {
    // Pick a random message
    const msg = messages[Math.floor(Math.random() * messages.length)];
    scrollTextElem.textContent = msg;

    // Remove and re-add the animation class to restart the animation
    scrollTextElem.classList.remove('scroll-text');
    void scrollTextElem.offsetWidth; // Trigger reflow
    scrollTextElem.classList.add('scroll-text');
}

// Initialize with a random message
restartScroll();

// Optionally, change the message at intervals
setInterval(restartScroll, 10000); // Change every 10 seconds
achievementsBtn.addEventListener('click', () => {
    updateAchievementsMenu();
    achievementsMenu.classList.add('open');
});

closeAchievementsBtn.addEventListener('click', () => {
    achievementsMenu.classList.remove('open');
});
toggleMusic.addEventListener("click", function () {
    const audio = document.getElementById("myAudio");
    if (IsOn === 0) {
        audio.currentTime = 0;
        audio.play();
        IsOn = 1;
    } else {
        audio.pause();
        IsOn = 0;
    }
    // Optional: remove the event listener so it only plays once
    // document.removeEventListener("click", arguments.callee);
});
function FormatCash(num) {
    const UNITS = ['', 'K', 'M', 'B', 'T', 'Q'];
    let i = 0;
    while (num >= 1000 && i < UNITS.length - 1) {
        num /= 1000;
        i++;
    }
    return '$' + num.toFixed(2).replace(/\.0+$|0+$/, '') + UNITS[i];
}
function updateAchievementsMenu() {
    achievementsList.innerHTML = '';
    achievements.forEach(a => {
        const li = document.createElement('li');
        li.classList.add('achievement');
        li.classList.add(a.unlocked ? 'unlocked' : 'locked');
        li.innerHTML = `
        <b>${a.name}</b><br>
        <small>${a.desc}</small>
        ${a.unlocked ? " ✅" : ""}
      `;
        achievementsList.appendChild(li);
    });
}

function showAchievementPopup(name) {
    const popup = document.createElement('div');
    popup.textContent = `🏆 Achievement Unlocked: ${name}!`;
    popup.style.position = 'fixed';
    popup.style.bottom = '20px';
    popup.style.left = '50%';
    popup.style.transform = 'translateX(-50%)';
    popup.style.background = '#333';
    popup.style.color = 'gold';
    popup.style.padding = '10px 20px';
    popup.style.borderRadius = '10px';
    popup.style.fontSize = '18px';
    popup.style.boxShadow = '0 0 10px gold';
    popup.style.zIndex = '9999';
    document.body.appendChild(popup);

    setTimeout(() => popup.remove(), 4000);
}
function unlockAchievement(id) {
    const achievement = achievements.find(a => a.id === id);
    if (achievement && !achievement.unlocked) {
        achievement.unlocked = true;
        showAchievementPopup(achievement.name);
        updateAchievementsMenu();
    }
}

shopBtn.addEventListener('click', () => {
    sideMenu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('open');
});
function updateDisplay() {
    CashDisplay.textContent = FormatCash(Cash);
    UPG1COSTDISPLAY.textContent = CLICKUPG1_COST;
    VIEWUPG1COSTDISPLAY.textContent = VIEWSUPG1_COST;
    UPG2COSTDISPLAY.textContent = CLICKUPG2_COST;
    VIEWUPG2COSTDISPLAY.textContent = VIEWSUPG2_COST;
    UPG3COSTDISPLAY.textContent = CLICKUPG3_COST;
    VIEWUPG3COSTDISPLAY.textContent = VIEWSUPG3_COST;
    checkAchievements();
    if (rebirthcount >= 1) {
        updateRebirthDisplay();
    }
    if (StatsEnabled === true) {
        CPC.textContent = Cash_Per_Click;
        CPS.textContent = Views;
    }
}
function checkAchievements() {
    if (!achievements.find(a => a.id === "firstClick").unlocked && Cash > 0) {
        unlockAchievement("firstClick");
    }
    if (!achievements.find(a => a.id === "clicks100").unlocked && clickcounter === 100) {
        unlockAchievement("clicks100");
    }
    if (!achievements.find(a => a.id === "clicks1000").unlocked && clickcounter === 1000) {
        unlockAchievement("clicks1000");
    }
    if (!achievements.find(a => a.id === "clicks10000").unlocked && clickcounter === 10000) {
        unlockAchievement("clicks10000");
    }
    if (!achievements.find(a => a.id === "cpc_achieve_1").unlocked && Cash_Per_Click >= 10) {
        unlockAchievement("cpc_achieve_1");
    }
    if (!achievements.find(a => a.id === "Rebirth").unlocked && rebirthcount === 1) {
        unlockAchievement("Rebirth");
    }
    if (!achievements.find(a => a.id === "TBT").unlocked && VIEWSUPG3_BEGUN === 1) {
        unlockAchievement("TBT");
    }
    if (!achievements.find(a => a.id === "Diamond Status").unlocked && DiamondPlayButtons === 1) {
        unlockAchievement("Diamond Status");
    }
    if (!achievements.find(a => a.id === "cps_achieve_1").unlocked && Views >= 10) {
        unlockAchievement("cps_achieve_1");
    }
    if (!achievements.find(a => a.id === "DCL").unlocked && UPG1_BROUGHT >= 5) {
        unlockAchievement("DCL");
    }
    if (!achievements.find(a => a.id === "WKLYUPL").unlocked && UPG2_BROUGHT >= 7) {
        unlockAchievement("WKLYUPL");
    }
    if (!achievements.find(a => a.id === "BPB").unlocked && UPG4_BROUGHT >= 5) {
        unlockAchievement("BPB");
    }
    if (!achievements.find(a => a.id === "BSTMAS").unlocked && date.getDate() === 25){
        unlockAchievement("BSTMAS");
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
    DiamondPlayButtonsDisplay.textContent = DiamondPlayButtons;
    rebirthCostDisplay.textContent = rebirthCost;
}
function clickBeast() {
    playClickSound();
    const beastImg = document.getElementById('MrBeast');
    if (!PulseDisabled) {
        beastImg.classList.remove('pulse');
        void beastImg.offsetWidth;
        beastImg.classList.add('pulse');
    }
    clickcounter += 1;
    if (DiamondPlayButtons === 0) {
        Cash += Cash_Per_Click;
        updateDisplay();
        checkAchievements();
        //HeroBeast Chance
        var chance = Math.random() * 100;
        chance = chance.toFixed(2);
        console.log(chance);
        if (chance <= 0.1) {
            beastImg.src = "HeroBeast.png";
            unlockAchievement("hesback");
            //This changes the image back after a few seconds
            setTimeout(() => {
                beastImg.src = "Mr Beast.jpg";
            }, 10000);
        }
    } else {
        Cash += Cash_Per_Click * (DiamondPlayButtonsMultipler);
        updateDisplay();
        checkAchievements();

        //HeroBeast Chance
        var chance = Math.random() * 100;
        chance = chance.toFixed(2);
        if (chance <= 0.1) {
            beastImg.src = "HeroBeast.png";
            unlockAchievement("hesback");
            //This changes the image back after a few seconds
            setTimeout(() => {
                beastImg.src = "Mr Beast.jpg";
            }, 10000);
        }
    }
}
function playClickSound() {
    const sound = clickSound.cloneNode(); // allows overlapping sounds
    sound.volume = clickSound.volume;
    sound.play();
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
        CLICKUPG3_COST = 1000;
        VIEWSUPG3_COST = 1500;
        UPG1_BROUGHT = 0;
        UPG2_BROUGHT = 0;
        UPG3_BROUGHT = 0;
        UPG4_BROUGHT = 0;
        UPG5_BROUGHT = 0;
        UPG6_BROUGHT = 0;
        if (rebirthcount % 10 === 0) {
            DiamondPlayButtons += 1;
            DiamondPlayButtonsMultipler += 1;
            alert("YOU HAVE GOT YOUR FIRST DIAMOND PLAY BUTTON");
        }
        // Hide shop upgrades resets (optional)
        document.getElementById('upgrade3').style.display = 'none';
        document.getElementById('upgrade4').style.display = 'none';
        document.getElementById('upgrade5').style.display = 'none';
        document.getElementById('upgrade6').style.display = 'none';

        updateDisplay();
        updateRebirthDisplay();
        checkAchievements();

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
        if (UPG1_BROUGHT === 0) {
            const upgrade3 = document.getElementById('upgrade3');
            upgrade3.style.display = 'list-item';  // Or 'block'
            updateDisplay()
        }
        UPG1_BROUGHT += 1;
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
        if (UPG3_BROUGHT === 0) {
            const upgrade5 = document.getElementById('upgrade5');
            upgrade5.style.display = 'list-item';  // Or 'block'
            updateDisplay();
        }
        UPG3_BROUGHT += 1;
        updateDisplay();
    } else {
        alert("YOU STILL BROKE")
    }
}
function BUYUPG3() {
    if (Cash >= CLICKUPG3_COST) {
        Cash -= CLICKUPG3_COST;
        Cash_Per_Click += 10;
        CLICKUPG3_COST *= 1.75;
        CLICKUPG3_COST = Math.round(CLICKUPG3_COST);
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
        if (UPG2_BROUGHT === 0) {
            const upgrade4 = document.getElementById('upgrade4');
            upgrade4.style.display = 'list-item';
        }
        UPG2_BROUGHT += 1;
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
        VIEWSUPG2_COST *= 1.80
        VIEWSUPG2_COST = Math.round(VIEWSUPG2_COST)
        if (UPG4_BROUGHT === 0) {
            const upgrade6 = document.getElementById('upgrade6');
            upgrade6.style.display = 'list-item';
            updateDisplay();
        }
        UPG4_BROUGHT += 1;
        setInterval(function () {
            Cash += Views;
            updateDisplay();
        }, 1000);
        updateDisplay();
    } else {
        alert("NO CASH FOOL")
    }
}
function VIEWUPG3() {
    if (Cash >= VIEWSUPG3_COST) {
        Cash -= VIEWSUPG3_COST;
        Views += 15;
        VIEWSUPG3_COST *= 1.70;
        VIEWSUPG3_COST = Math.round(VIEWSUPG3_COST);
        if (VIEWSUPG3_BEGUN === 0) {
            VIEWSUPG3_BEGUN = 1;
            checkAchievements();
        }
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
function isMobile() {
    return window.innerWidth < 768; // you can adjust this threshold
}
// Generate fire emojis randomly
function createFire() {
    if (isMobile()) return;

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
        CLICKUPG3_COST,
        UPG1_BROUGHT,
        UPG2_BROUGHT,
        UPG3_BROUGHT,
        UPG4_BROUGHT,
        UPG5_BROUGHT,
        UPG6_BROUGHT,
        Views,
        VIEWSUPG1_COST,
        VIEWSUPG2_COST,
        VIEWSUPG3_COST,
        StatsEnabled,
        PulseDisabled,
        permUpgrades,
        Playbuttons,
        DiamondPlayButtons,
        DiamondPlayButtonsMultipler,
        rebirthCost,
        achievements,
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
            CLICKUPG3_COST = gameState.CLICKUPG3_COST ?? 1000;
            Views = gameState.Views ?? 0;
            VIEWSUPG1_COST = gameState.VIEWSUPG1_COST ?? 100;
            VIEWSUPG2_COST = gameState.VIEWSUPG2_COST ?? 500;
            VIEWSUPG3_COST = gameState.VIEWSUPG3_COST ?? 1500;
            StatsEnabled = gameState.StatsEnabled ?? false;
            PulseDisabled = gameState.PulseDisabled ?? false;
            Playbuttons = gameState.Playbuttons ?? 0;
            DiamondPlayButtons = gameState.DiamondPlayButtons ?? 0;
            DiamondPlayButtonsMultipler = gameState.DiamondPlayButtonsMultipler ?? 1;
            rebirthCost = gameState.rebirthCost ?? 1000;
            permUpgrades = gameState.permUpgrades ?? {
                clickPower: { owned: false, cost: 5 },
                passiveIncome: { owned: false, cost: 10 }
            };
            UPG1_BROUGHT = gameState.UPG1_BROUGHT ?? 0;
            UPG2_BROUGHT = gameState.UPG2_BROUGHT ?? 0;
            UPG3_BROUGHT = gameState.UPG3_BROUGHT ?? 0;
            UPG4_BROUGHT = gameState.UPG4_BROUGHT ?? 0;
            UPG5_BROUGHT = gameState.UPG5_BROUGHT ?? 0;
            UPG6_BROUGHT = gameState.UPG6_BROUGHT ?? 0;
            achievements = gameState.achievements ?? achievements;
            Cash_Per_Click = Cash_Per_Click + (permUpgrades.clickPower.owned ? 1 : 0);
            Views = Views + (permUpgrades.passiveIncome.owned ? 1 : 0);
            achievements = gameState.achievements ?? achievements;
            updateAchievementsMenu();


            updateDisplay();
            updateRebirthDisplay();
            updatePermUpgradesDisplay();

            // Show/hide upgrades based on loaded state
            if (UPG1_BROUGHT === 1) {
                document.getElementById('upgrade3').style.display = 'list-item';
            } else {
                document.getElementById('upgrade3').style.display = 'none';
            }

            if (UPG2_BROUGHT === 1) {
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