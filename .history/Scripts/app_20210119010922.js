// IIFE - Immediately Invoked Function Expression
// Anonymous Self-Executing Function

(function()
{

    function Start()
    {
        console.log("App Started...");

        let clickMeButton = document.getElementById("clickMeButton");

        clickMeButton.addEventListener("click", ()=>
        {
            console.log("Click Me Button was clicked!");
        });
    }

    // add an eventlistener to the window object
    // when the browser window finishes loading
    // call the Start function
    window.addEventListener("load", Start);

})();