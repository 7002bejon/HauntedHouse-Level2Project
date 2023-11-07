// Wriiten by Bejon
function initialize() {
    let playerTracker = null;
    let playerTotalKeys = 0;
    let playerUnusedKeys = 0;
    let playerUnlockedStairs1 = false;
    let playerUnlockedStairs2 = false;
    let playerUnlockedKitchen = false;
    let playerUnlockedFinalRoom = false;
    let playerCheckedBedroom = false;
    let playerCheckedDiningRoom = false;
    let playerCheckedBalcony = false;
    let playerCheckedStudio = false;
    let playerDeath = false;
}

function diningEnd() {
    let title = document.getElementById("EndTitle");
    let text = document.getElementById("EndingText");
    title.innerHTML = "Dining Mishap";
    text.innerHTML = "You take a bite of food and feel sick. Before you know it, you are on the floor, dead";
}

function EventSend() {
    head = document.getElementById("heading");
    context = document.getElementById("Context");
    choice1 = document.getElementById("Choice1");
    choice2 = document.getElementById("Choice2");
    if (playerTracker = "Gallery") {
        window.location.href ="eventScreen.html";
        head.innerHTML = "Painting Popup";
        context.innerHTML = "You see a blank canvas with a paintcan next to it";
        choice1.innerHTML = "Paint a picture of a key";
        choice2.innerHTML = "Paint a picture of door";
    }
    if (playerTracker = "Bathroom") {

    }
    if (playerTracker = "Conservatory") {

    }
    if (playerTracker = "DiningRoom") {

    }
}
function EndSendGood() {
    startButton = document.getElementById("ReturnStart");
    startButton.style.visibility = "hidden";
    returnButton = document.getElementById("ReturnPrevious");
    returnButton.style.visibility = "visible";
    title = document.getElementById("EndTitle");
    text = document.getElementById("EndingText");
    if (playerTracker = "Gallery") {
        title.innerHTML = "Mysterious Foresight";
        text.innerHTML = "Upon painting the key, you see an image appear in your mind. The image is that of a Bedroom";
    }
}

function EndSendBad() {
    startButton = document.getElementById("ReturnStart");
    startButton.style.visibility = "visible";
    returnButton = document.getElementById("ReturnPrevious");
    returnButton.style.visibility = "hidden";
    title = document.getElementById("EndTitle")
    text = document.getElementById("EndingText");
    if (playerTracker = "Gallery") {
       title.innerHTML = "Bad Ending 1 - Darker and Deeper"
       text.innerHTML = "Upon painting the door, you drop down into what seems like an endless abyss. You will never make it out.";
    }
}
function checkKeyRoom() {
    checkMessage = document.getElementById("Check");
    if (playerTracker == "Bedroom" && playerCheckedBedroom == false) {
       checkMessage.innerHTML = "You see a key near the bed. You pick it up.";
       playerCheckedBedroom = true;
    } else if (playerTracker == "Bedroom" & playerCheckedBedroom == true) {
       checkMessage.innerHTML = "There is nothing of interest";
    }
    if (playerTracker = "DiningRoom" & playerCheckedDiningRoom == false ) {
        checkMessage.innerHTML = "You see a key on the table. You pick it up.";
        playerCheckedDiningRoom == true;
     } else if (playerTracker = "DiningRoom" & playerCheckedDiningRoom == true) {
        checkMessage.innerHTML = "There is nothing of interest";
     }
     if (playerTracker = "Balcony" & playerCheckedBalcony == false ) {
        checkMessage.innerHTML = "You see a key on the rail. You pick it up.";
        playerCheckedBalcony == true;
     } else if (playerTracker = "Balcony" & playerCheckedBalcony == true) {
        checkMessage.innerHTML = "There is nothing of interest";
     }
     if (playerTracker = "Studio" & playerCheckedStudio == false ) {
        checkMessage.innerHTML = "You see a key on the ground. You pick it up.";
        playerCheckedStudio == true;
     } else if (playerTracker = "Studio" & playerCheckedStudio == true) {
        checkMessage.innerHTML = "There is nothing of interest";
     }
}

function changePlayerTrackerLivingRoom() {
    playerTracker == "Living Room";
}

function changePlayerTrackerStairs1() {
    playerTracker == "Stairs1";
}

function changePlayerTrackerStairs2() {
    playerTracker == "Stairs2";
}

function changePlayerTrackerKitchen() {
    playerTracker == "Kitchen";
}

function changePlayerTrackerFinalRoom() {
    playerTracker == "Final Room";
}

function changePlayerTrackerDiningRoom() {
    playerTracker == "Dining Room";
}

function changePlayerTrackerBedroom() {
    playerTracker == "Bedroom";
}

function changePlayerTrackerBathroom() {
    playerTracker == "Bathroom";
}

function changePlayerTrackerConservatory() {
    playerTracker == "Conservatory";
}

function changePlayerTrackerStudio() {
    playerTracker == "Studio";
}

function changePlayerTrackerBalcony() {
    playerTracker == "Balcony";
}

function keyCheck() {
    stairs1 = document.getElementById("KeyCheckStairs1");
    if (playerUnusedKeys == 0 & playerUnlockedStairs1 == false) {
        stairs1.innerHTML = "The door ahead seems to be locked, maybe there is a key you can find?";     
    } else if (playerUnusedKeys!= 0 & playerUnlockedStairs1 == false) {
        stairs1.innerHTML = "The door ahead is locked, but you can unlock it with a key";
    }
}

function showUnlockButton() {
    x = document.getElementById("Unlock");
    if (playerTracker = "Kitchen") {
        if (playerUnlockedStairs2 == false) {
            x.style.visibility="visible";
        }
        if (playerUnlockedKitchen == false) {
            x.style.visibility="visible";
        }
    } else {
        x.style.visibility="hidden";
    }
    if (playerTracker == "Stairs1") {
        if (playerUnlockedStairs1 = false) {
            x.style.visibility="visible";
        }
    } else {
        x.style.visibility="hidden";
    }
    if (playerTracker == "LivingRoom") {
        if (playerUnlockedKitchen == false & playerUnusedKeys != 0) {
            x.style.visibility="visible";
        }
    } else {
        x.style.visibility="hidden";
    }
    if (playerTracker == "Conservatory") {
    if (playerUnlockedFinalRoom == false & playerTotalKeys == 4) {
        x.style.visibility="visible";
    }
} else {
    x.style.visibility="hidden";
}
}

function unlock() {
        if (playerTracker == "Stairs1") {
            playerUnlockedStairs1 == true;
            playerUnusedKeys -= 1;
    }
        if (playerTracker == "LivingRoom")  {
            playerUnlockedKitchen == true;
            playerUnusedKeys -=1;
        }
        if (playerTracker == "Stairs2")  {
            playerUnlockedStairs2 == true;
            playerUnusedKeys -=1;
        }
        if (playerTracker == "Kitchen")  {
            playerUnlockedKitchen == true;
            playerUnusedKeys -=1;
        }
        if (playerTracker == "Conservatory")  {
            playerUnlockedFinalRoom == true;
            playerUnusedKeys -=1;
        }
}

const buttons = document.querySelectorAll('button');
var dineb = document.getElementById("dine");
dineb.addEventListener('click', diningEnd());
for (const button of buttons) {
    button.addEventListener("click", checkKeyRoom());
    button.addEventListener('click', diningEnd());
}

