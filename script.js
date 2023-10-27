function initialize() {
    playerTracker = null;
    playerTotalKeys = 0;
    playerUnusedKeys = 0;
    playerUnlockedStairs1 = false;
    playerUnlockedStairs2 = false;
    playerUnlockedKitchen = false;
    playerUnlockedFinalRoom = false;
    playerDeath = false;
}

function changePlayerTrackerLR() {
    playerTracker == "Living Room";
}

function changePlayerTrackerSTR1() {
    playerTracker == "Stairs1";
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

}

function unlock() {
        if (playerTracker == "Stairs1") {
            playerUnlockedStairs1 == true;
            playerUnusedKeys -= 1;

    }
}
