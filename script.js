function initialize() {
    playerTracker = null;
    playerTotalKeys = 0;
    playerUnusedKeys = 0;
    playerUnlockedStairs1 = false;
    playerUnlockedStairs2 = false;
    playerUnlockedKitchen = false;
    playerUnlockedFinalRoom = false;
    playerDeath = false;
    document.getElementById("Unlock").style.display= 'none';
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
            x.style.display='block';
        }
        if (playerUnlockedKitchen == false) {
            x.style.display='block';
        }
    } else {
       x.style.display='none';
    }
    if (playerTracker == "Stairs1") {
        if (playerUnlockedStairs1 = false) {
            x.style.display='block';
        }
    } else {
        x.style.display='none';
    }
    if (playerTracker == "LivingRoom") {
        if (playerUnlockedKitchen == false & playerUnusedKeys != 0) {
           x.style.display='block';
        }
    } else {
        x.style.display='none';
    }
    if (playerTracker == "Conservatory") {
    if (playerUnlockedFinalRoom == false & playerTotalKeys == 4) {
        x.style.display='block';
    }
} else {
    x.style.display='none';
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
