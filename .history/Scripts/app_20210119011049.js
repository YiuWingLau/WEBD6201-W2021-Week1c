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

    // event listener
    window.addEventListener("load", Start);

})();