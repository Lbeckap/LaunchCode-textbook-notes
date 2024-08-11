//Code Your Solution Below

window.addEventListener("load", function () {
    //register the handler
    const form = document.getElementById("form");

    const testName = document.getElementById("test-name");
    const testDate = document.getElementById("test-date");
    const rocketType = document.getElementById("rocket-type");
    const boosterCount = document.getElementById("booster-count");
    const windRating = document.querySelector('input[name="windRating"]:checked');
    const productionServers = document.getElementById("production-servers");


    console.log(testName.value.trim());
    console.log(testDate.value);
    console.log(rocketType.value);
    console.log(boosterCount.value);
    console.log(!windRating);
    console.log(productionServers.checked);

    form.addEventListener("submit", function (event) {

        if (testName.value.trim() === '' ||
            testDate.value.trim() === '' ||
            rocketType.value === '' ||
            boosterCount.value === '' ||
            !windRating ||
            productionServers.checked === false) {
            window.alert("All fields are required!");
            // stop the form submission
            event.preventDefault();
        }
    });
});





