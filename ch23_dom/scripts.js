// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init () {
    //create variables to track the math instead of relying of the actually element information from the DOM
    let altitute = 0; 
    let rocketX = 0;
    let rocketY = 0;

    const takeOffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleScreen = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const abortButton = document.getElementById("missionAbort");

    const rocketImg = document.getElementById("rocket");

    rocketImg.style.position = "absolute";
    resetShuttle();
   

    takeOffButton.addEventListener("click", event => {
        flightStatus.innerHTML = "Shuttle in flight";
        shuttleScreen.style.backgroundColor = "blue";
        altitute = 10000;
        shuttleHeight.textContent = altitute;
      rocketY += 10;
      rocketImg.style.marginBottom = rocketY + "px";
    });

    const landButton = document.getElementById("landing");
    landButton.addEventListener("click", event => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed."
        resetShuttle();
    });

    abortButton.addEventListener("click", function () {
        let willAbort = window.confirm("Confirm that you want to abort the mission.");
        flightStatus.innerHTML = "Mission aborted."
        if (willAbort) {
            resetShuttle();
        }

    });

    //Use event delegation for directional buttons, if event.target.id is this, then do this
    document.addEventListener("click", function (event) {
        let backgroundWidth = parseInt(window.getComputedStyle(shuttleScreen).getPropertyValue("width"));
        console.log(backgroundWidth);

        if (event.target.id === "up" && altitute < 250000) {
            rocketY += 10;
            rocketImg.style.marginBottom = rocketY + "px"; 
            altitute += 10000;
            shuttleHeight.textContent = altitute;
        }
        if (event.target.id === "down" && altitute > 0) {
            rocketY -= 10;
            rocketImg.style.marginBottom = rocketY + "px"; 
            altitute -= 10000;
            shuttleHeight.textContent = altitute;
        }
        if (event.target.id === "right" && rocketX < (backgroundWidth/2 - 40)) {
            rocketX += 10;
            rocketImg.style.marginLeft = rocketX + "px"; 
        }
        if (event.target.id === "left" && rocketX > -(backgroundWidth/2 - 40)) {
            rocketX -= 10; 
            rocketImg.style.marginLeft = rocketX + "px";       
        }
    });

    function resetShuttle () {
        rocketX = 0;
        rocketY = 0;
        altitute = 0;
        shuttleHeight.textContent = altitute;
        rocketImg.style.bottom = 0;
        rocketImg.style.marginBottom = 0;
        rocketImg.style.transform = "translate(-50%, 0)";
        shuttleScreen.style.backgroundColor = "";
    }
}



window.addEventListener("load", init);